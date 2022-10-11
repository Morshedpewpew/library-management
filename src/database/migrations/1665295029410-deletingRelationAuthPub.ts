import {MigrationInterface, QueryRunner} from "typeorm";

export class deletingRelationAuthPub1665295029410 implements MigrationInterface {
    name = 'deletingRelationAuthPub1665295029410'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`publisher\` ADD \`loc\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`publisher\` DROP COLUMN \`loc\``);
    }

}
