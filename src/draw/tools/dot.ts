import {Layer} from 'src/core/layer';
import {Point} from '../../core/point';
import {Tool, ToolParamType} from './tool';

export class DotTool extends Tool {
    name = 'dot';

    brushSize: Point = new Point(1, 1);

    params = [
        {
            name: 'x',
            type: ToolParamType.number,
            setValue(layer: Layer, value: number) {
                layer.position.x = value;
            },
            getValue(layer: Layer) {
                return layer.position.x;
            }
        },
        {
            name: 'y',
            type: ToolParamType.number,
            setValue(layer: Layer, value: number) {
                layer.position.y = value;
            },
            getValue(layer: Layer) {
                return layer.position.y;
            }
        }
    ];

    draw(layer: Layer): void {
        const {dc, position, size} = layer;
        dc.clear().rect(position.clone(), size.clone(), true);
    }

    edit(layer: Layer, position: Point, originalEvent: MouseEvent): void {}

    startEdit(layer: Layer, position: Point, originalEvent: MouseEvent): void {
        const {dc, size} = layer;
        layer.position = position.clone().subtract(this.brushSize.clone());
        layer.size = this.brushSize.clone();
        dc.rect(layer.position, layer.size, true);
    }

    stopEdit(layer: Layer, position: Point, originalEvent: MouseEvent): void {}
}
