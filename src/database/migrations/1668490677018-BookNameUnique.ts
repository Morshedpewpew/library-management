import {MigrationInterface, QueryRunner} from "typeorm";

export class BookNameUnique1668490677018 implements MigrationInterface {
    name = 'BookNameUnique1668490677018'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`book\` ADD UNIQUE INDEX \`IDX_233978864a48c44d3fcafe0157\` (\`name\`)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`book\` DROP INDEX \`IDX_233978864a48c44d3fcafe0157\``);
    }

}
