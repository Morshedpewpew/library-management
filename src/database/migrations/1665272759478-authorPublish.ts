import {MigrationInterface, QueryRunner} from "typeorm";

export class authorPublish1665272759478 implements MigrationInterface {
    name = 'authorPublish1665272759478'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`author_publishers_publisher\` (\`authorID\` int NOT NULL, \`publisherID\` int NOT NULL, INDEX \`IDX_a5f30b65997522d9f62eccd4aa\` (\`authorID\`), INDEX \`IDX_f46938169fd944604815ea0714\` (\`publisherID\`), PRIMARY KEY (\`authorID\`, \`publisherID\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`author_publishers_publisher\` ADD CONSTRAINT \`FK_a5f30b65997522d9f62eccd4aac\` FOREIGN KEY (\`authorID\`) REFERENCES \`author\`(\`ID\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`author_publishers_publisher\` ADD CONSTRAINT \`FK_f46938169fd944604815ea07149\` FOREIGN KEY (\`publisherID\`) REFERENCES \`publisher\`(\`ID\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`author_publishers_publisher\` DROP FOREIGN KEY \`FK_f46938169fd944604815ea07149\``);
        await queryRunner.query(`ALTER TABLE \`author_publishers_publisher\` DROP FOREIGN KEY \`FK_a5f30b65997522d9f62eccd4aac\``);
        await queryRunner.query(`DROP INDEX \`IDX_f46938169fd944604815ea0714\` ON \`author_publishers_publisher\``);
        await queryRunner.query(`DROP INDEX \`IDX_a5f30b65997522d9f62eccd4aa\` ON \`author_publishers_publisher\``);
        await queryRunner.query(`DROP TABLE \`author_publishers_publisher\``);
    }

}
