import {MigrationInterface, QueryRunner} from "typeorm";

export class test1664771009678 implements MigrationInterface {
    name = 'test1664771009678'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`book\` ADD \`categoryID\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`book\` ADD CONSTRAINT \`FK_b873404f75db0dcf3c81aace156\` FOREIGN KEY (\`categoryID\`) REFERENCES \`category\`(\`ID\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`book\` DROP FOREIGN KEY \`FK_b873404f75db0dcf3c81aace156\``);
        await queryRunner.query(`ALTER TABLE \`book\` DROP COLUMN \`categoryID\``);
    }

}
