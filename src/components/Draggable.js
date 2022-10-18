import React from 'react';
import PropTypes from 'prop-types';


export default class Draggable extends React.Component {
    static propTypes = {
        children: PropTypes.element.isRequired
    };

    static defaultProps = {
        onDrag: (coordinates, tdom) => {
            const transformStr = `translate(${coordinates.x}px,${coordinates.y}px)`;
            tdom.style.transform = transformStr;
        }
    };

    position = {
        startX: 0,
        startY: 0,
        dx: 0,
        dy: 0,
        tx: 0,
        ty: 0
    };

    start = event => {
        if (event.button !== 0) {
            return;
        }
        document.addEventListener("mousemove", this.docMove);
        this.position.startX = event.pageX - this.position.dx;
        this.position.startY = event.pageY - this.position.dy;
    };

    docMove = event => {
        const tx = event.pageX - this.position.startX;
        const ty = event.pageY - this.position.startY;
        this.props.onDrag({ x: tx, y: ty }, this.tdom);
        this.position.dx = tx;
        this.position.dy = ty;
    };

    docMouseUp = event => {
        document.removeEventListener("mousemove", this.docMove);
    }

    componentDidMount() {
        this.tdom.addEventListener("mousedown", this.start);
        document.addEventListener("mouseup", this.docMouseUp);
    }

    componentWillUnmount() {
        this.tdom.removeEventListener("mousedown", this.start);
        document.removeEventListener("mouseup", this.docMouseUp);
        document.removeEventListener("mousemove", this.docMove);
    }

    render() {
        const { children } = this.props;
        const newStyle = { ...children.props.style, cursor: "move", userSelect: "none" };
        return React.cloneElement(React.Children.only(children), {
            ref: tdom => {
                return (this.tdom = tdom);
            },
            style: newStyle
        });
    }
}