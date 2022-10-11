import {MigrationInterface, QueryRunner} from "typeorm";

export class deletingRelationAuth1665295187062 implements MigrationInterface {
    name = 'deletingRelationAuth1665295187062'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`publisher\` DROP COLUMN \`loc\``);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`publisher\` ADD \`loc\` varchar(255) NOT NULL`);
    }

}
