'use strict';


angular.module('whApp')
	.factory('Watches', function () {
		return {
			watches: function() {
				return [
						{'src':['images/main/casio17.jpg',
					'images/main/casio18.jpg','images/main/casio19.jpg','images/main/casio20.jpg'], 'id':'1', 'price':'49.9', 'label':'images/main/casio.jpg', 'brand':'Casio'},
						{'src':['images/main/casio21.jpg',
					'images/main/casio22.jpg','images/main/casio23.jpg','images/main/casio24.jpg'], 'id':'2', 'price':'64.9', 'label':'images/main/casio.jpg', 'brand':'Casio'},
						{'src':['images/main/casio25.jpg',
					'images/main/casio26.jpg','images/main/casio27.jpg','images/main/casio28.jpg'], 'id':'3', 'price':'53.9', 'label':'images/main/casio.jpg', 'brand':'Casio'},
						{'src':['images/main/casio29.jpg',
					'images/main/casio30.jpg'], 'id':'4', 'price':'89.9', 'label':'images/main/casio.jpg', 'brand':'Casio'},
						{'src':['images/main/casio31.jpg',
					'images/main/casio32.jpg','images/main/casio33.jpg'], 'id':'5', 'price':'79.9', 'label':'images/main/casio.jpg', 'brand':'Casio'},
						{'src':['images/main/casio36.jpg',
					'images/main/casio35.jpg'], 'id':'6', 'price':'69.9', 'label':'images/main/casio.jpg', 'brand':'Casio'},
						{'src':['images/main/casio34.jpg','images/main/casio344.jpg'], 'id':'7', 'price':'49.9', 'label':'images/main/casio.jpg', 'brand':'Casio'},
						{'src':['images/main/timex.jpg','images/main/timex2.jpg','images/main/timex3.jpg','images/main/timex4.jpg'], 'id':'8', 'price':'34.4', 'label':'images/main/timex1.jpg', 'brand':'Timex'},
						{'src':['images/main/timex5.jpg','images/main/timex6.jpg','images/main/timex7.jpg','images/main/timex8.jpg'], 'id':'9', 'price':'34.4', 'label':'images/main/timex1.jpg', 'brand':'Timex'},
						{'src':['images/main/timex9.jpg','images/main/timex10.jpg','images/main/timex11.jpg','images/main/timex12.jpg'], 'id':'10', 'price':'95.9', 'label':'images/main/timex1.jpg', 'brand':'Timex'},
						{'src':['images/main/timex13.jpg','images/main/timex14.jpg','images/main/timex15.jpg','images/main/timex16.jpg'], 'id':'11', 'price':'89.9', 'label':'images/main/timex1.jpg', 'brand':'Timex'},
						{'src':['images/main/omega39.jpg','images/main/omega39.jpg'], 'id':'12', 'price':'64.9', 'label':'images/main/omega.jpg', 'brand':'Omega'},
						{'src':['images/main/omega41.jpg','images/main/omega42.jpg'], 'id':'13', 'price':'53.9', 'label':'images/main/omega.jpg', 'brand':'Omega'},
						{'src':['images/main/omega43.jpg','images/main/omega44.jpg'], 'id':'14', 'price':'64.9', 'label':'images/main/omega.jpg', 'brand':'Omega'},
						{'src':['images/main/rolex48.jpg','images/main/rolex49.jpg'], 'id':'15', 'price':'95.9', 'label':'images/main/rolex.jpg', 'brand':'Rolex'},
						{'src':['images/main/rolex50.jpg','images/main/rolex51.jpg'], 'id':'16', 'price':'64.9', 'label':'images/main/rolex.jpg', 'brand':'Rolex'},
						{'src':['images/main/rolex52.jpg','images/main/rolex53.jpg'], 'id':'17', 'price':'89.9', 'label':'images/main/rolex.jpg', 'brand':'Rolex'},
						{'src':['images/main/chopard.jpg','images/main/chopard55.jpg'], 'id':'18', 'price':'53.9', 'label':'images/main/chopard1.jpg', 'brand':'Chopard'},
						{'src':['images/main/chopard56.jpg','images/main/chopard57.jpg'], 'id':'19', 'price':'34.4', 'label':'images/main/chopard1.jpg', 'brand':'Chopard'},
						{'src':['images/main/chopard60.jpg','images/main/chopard61.jpg'], 'id':'20', 'price':'79.9', 'label':'images/main/chopard1.jpg', 'brand':'Chopard'},
						{'src':['images/main/IWC70.jpg','images/main/IWC700.jpg'], 'id':'21', 'price':'64.9', 'label':'images/main/iwc.jpg', 'brand':'IWC'},
						{'src':['images/main/IWC71.jpg','images/main/IWC71.jpg'], 'id':'22', 'price':'95.9', 'label':'images/main/iwc.jpg', 'brand':'IWC'},
						{'src':['images/main/bulova45.jpg','images/main/bulova455.jpg'], 'id':'23', 'price':'64.9', 'label':'images/main/bulova.jpg', 'brand':'Bulova'},
						{'src':['images/main/bulova46.jpg','images/main/bulova466.jpg'], 'id':'24', 'price':'79.9', 'label':'images/main/bulova.jpg', 'brand':'Bulova'},
						{'src':['images/main/bulova47.jpg','images/main/bulova477.jpg'], 'id':'25', 'price':'53.9', 'label':'images/main/bulova.jpg', 'brand':'Bulova'},
						{'src':['images/main/brietling74.jpg','images/main/brietling76.jpg'], 'id':'26', 'price':'89.9', 'label':'images/main/brietling.jpg', 'brand':'Breitling'},
						{'src':['images/main/brietling76.jpg','images/main/brietling77.jpg'], 'id':'27', 'price':'34.4', 'label':'images/main/brietling.jpg', 'brand':'Breitling'},
						{'src':['images/main/Baume&mercier72.jpg','images/main/Baume&mercier73.jpg'], 'id':'28', 'price':'95.9', 'label':'images/main/baume.jpg', 'brand':'Baume'},
						{'src':['images/main/baume81.jpg','images/main/baume82.jpg'], 'id':'29', 'price':'64.9', 'label':'images/main/baume.jpg', 'brand':'Baume'},
						{'src':['images/main/baume83.jpg','images/main/baume833.jpg'], 'id':'30', 'price':'79.9', 'label':'images/main/baume.jpg', 'brand':'Baume'},
						{'src':['images/main/bell&ross64.jpg','images/main/bell&ross644.jpg'], 'id':'31', 'price':'95.9', 'label':'images/main/bell&ross.jpg', 'brand':'Bell & Ross'},
						{'src':['images/main/bell&ross65.jpg','images/main/bell&ross655.jpg'], 'id':'32', 'price':'89.9', 'label':'images/main/bell&ross.jpg', 'brand':'Bell & Ross'},
						{'src':['images/main/blancpain84.jpg','images/main/blancpain85.jpg'], 'id':'33', 'price':'34.4', 'label':'images/main/blanc.jpg', 'brand':'Blancpain'},
						{'src':['images/main/blancpain86.jpg','images/main/blancpain866.jpg'], 'id':'34', 'price':'89.9', 'label':'images/main/blanc.jpg', 'brand':'Blancpain'},
						{'src':['images/main/chanel.jpg'], 'id':'35', 'price':'95.9', 'label':'images/main/chanel3.jpg', 'brand':'Chanel'},
						{'src':['images/main/chanel2.jpg'], 'id':'36', 'price':'95.9', 'label':'images/main/chanel3.jpg', 'brand':'Chanel'},
						{'src':['images/main/cartier58.jpg','images/main/cartier59.jpg'], 'id':'37', 'price':'89.9', 'label':'images/main/cartier1.jpg', 'brand':'Cartier'},
						{'src':['images/main/patek66.jpg','images/main/patek666.jpg'], 'id':'38', 'price':'53.9', 'label':'images/main/patek.jpg', 'brand':'Patek'},
						{'src':['images/main/patek68.jpg','images/main/patek688.jpg'], 'id':'39', 'price':'79.9', 'label':'images/main/patek.jpg', 'brand':'Patek'},
						{'src':['images/main/rue78.jpg','images/main/rue79.jpg'], 'id':'40', 'price':'64.9', 'label':'images/main/rue.jpg', 'brand':'RUE'},
						{'src':['images/main/rue80.jpg','images/main/rue800.jpg'], 'id':'41', 'price':'89.9', 'label':'images/main/rue.jpg', 'brand':'RUE'},
						{'src':['images/main/tag_heuer62.jpg','images/main/tag_heuer622.jpg'], 'id':'42', 'price':'53.9', 'label':'images/main/tag.jpg', 'brand':'Tag Heuer'}
					];
			},
		};
	});

