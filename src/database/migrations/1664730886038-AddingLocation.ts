import {MigrationInterface, QueryRunner} from "typeorm";

export class AddingLocation1664730886038 implements MigrationInterface {
    name = 'AddingLocation1664730886038'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`books\` \`location\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`location\``);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`location\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`location\``);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`location\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`location\` \`books\` varchar(255) NOT NULL`);
    }

}
