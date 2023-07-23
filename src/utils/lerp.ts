export default function lerp(start: number, end: number, t: number): number {
    return (1 - t) * start + t * end;

    // i doubt this lerp function is correct;
}
