import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'append'
})

export class AppendPipe implements PipeTransform{
    transform(value: any, size: string, ext: string): string {
        return `${value}/${size}.${ext}`;
    }
}
