export const set_filter = 'setFilter';
export const defaultFilter = '最新入驻';

export const filters = {
	fastSeek: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
	filterType: ['国画', '书法', '油画', '版画', '工艺', '水彩', '当代艺术'],
	country1: ['北京', '上海', '广州', '福建', '浙江', '山东'],
	country2: ['韩国', '日本', '英国', '美国', '法国'],
	other: ['国搜推荐', '最新入驻']
};

export const filtersTitle = {
	fastSeek: '快搜',
	filterType: '类型',
	country1: '国内',
	country2: '国外',
	other: '其他'
};

export const getFilter = (typeValue, text) => ({type: set_filter, typeValue, text});

export function test() {
	return {
		type: 'test'
	}
}