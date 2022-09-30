import {MigrationInterface, QueryRunner} from "typeorm";

export class InitialMigration1664469196704 implements MigrationInterface {
    name = 'InitialMigration1664469196704'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`user\` (\`ID\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`books\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, PRIMARY KEY (\`ID\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`user\``);
    }

}
