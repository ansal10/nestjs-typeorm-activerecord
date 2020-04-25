import { MigrationInterface, QueryRunner, Table } from 'typeorm';
import { TableName } from '../TableName';

export class createUserTable1587784427638 implements MigrationInterface {

    public userTable: Table = new Table({
        name: TableName.User,
        columns: [
            {
                name: 'id',
                type: 'integer',
                isGenerated: true,
                isPrimary: true,
                generationStrategy: 'increment'
            },
            {
                name: 'email',
                type: 'string',
                isNullable: false,
                isUnique: true,
            },
            {
                name: 'full_name',
                type: 'string',
                isNullable: true,
                isUnique: false
            }
        ]
    })

    public up = async (queryRunner: QueryRunner) => {
        await queryRunner.createTable(this.userTable);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropTable(this.userTable);
    }

}
