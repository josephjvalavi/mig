import { MigrationInterface, QueryRunner } from "typeorm";

export class change1677396499970 implements MigrationInterface {
    name = 'change1677396499970'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "country" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "country"`);
    }

}
