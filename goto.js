//выдвигающиеся меню 


var modalFactory = {
	createModal:function(){
		var newModal = {
			menuBtn: null,
			menu: null,
			content: null,
			
			start: function(){
				var that = this 
				this.menuBtn = document.getElementsByClassName('menu-btn')[0]
               this.menu = document.getElementsByClassName('menu')[0]
               this.content = document.getElementsByClassName('content')[0]
                this.current = 0
                this.menuBtn.addEventListener('click' , function(event){
                	that.showMenu(event)
                })
			},
			showMenu: function(event){
               this.menu.classList.toggle('menu_active')
               this.content.classList.toggle('content_active')

			}

		}
return newModal
	}
}
var newModal1 = modalFactory.createModal()
newModal1.start() 







