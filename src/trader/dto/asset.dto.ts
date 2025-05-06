import { IsString, IsNumber } from 'class-validator';

export class AssetDto {
    @IsString()
    readonly name: string;

    @IsNumber()
    readonly value: number;

    @IsString()
    readonly symbol: string;

    @IsNumber()
    readonly quantity: number;
}