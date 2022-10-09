import {MigrationInterface, QueryRunner} from "typeorm";

export class publisherBookRelation1665240920298 implements MigrationInterface {
    name = 'publisherBookRelation1665240920298'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`book\` ADD \`publisherID\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`book\` ADD CONSTRAINT \`FK_53384a59e95310676115ae68fa3\` FOREIGN KEY (\`publisherID\`) REFERENCES \`publisher\`(\`ID\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`book\` DROP FOREIGN KEY \`FK_53384a59e95310676115ae68fa3\``);
        await queryRunner.query(`ALTER TABLE \`book\` DROP COLUMN \`publisherID\``);
    }

}
