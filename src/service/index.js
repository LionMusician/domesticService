import fly from './http'

export default {
	// 主密钥下载
	masterKeyDownload: (data) => {
		return fly.request('/handBrush/masterKeyDownload', data, { method: 'post'});
	},
	// POS参数传递
	paramDownload: (data) => {
		return fly.request('/handBrush/paramDownload', data, { method: 'post'});
	},
	// 商户扫二维码接口
	micropayNewCouponOrPoint: (data) => {
		return fly.request('/micropayNewCouponOrPoint', data, { method: 'post'});
	}
}
