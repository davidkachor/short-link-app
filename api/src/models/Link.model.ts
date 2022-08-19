import { Model, DataTypes } from 'sequelize'
import sequelize from '../config/sequelize'

class Link extends Model {
	hash?: string
	original?: string
	short?: string
}

Link.init(
	{
		hash: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		original: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
	{ sequelize, modelName: 'Links' }
)

export default Link
