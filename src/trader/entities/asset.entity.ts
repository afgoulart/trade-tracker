import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('assets')
export class AssetEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    symbol: string;

    @Column()
    price: number;

    @Column()
    volume: number;

    @Column()
    marketCap: number;

    @Column()
    createdAt: Date;

    @Column()
    updatedAt: Date;
}