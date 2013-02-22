$('./body') {

$('.//header'){
	add_class('_header')
	attribute("data-ur-set") {
    value("toggler")
 	}
	$$('#searchForm'){
	add_class('_searchForm')	
	}
	insert_top('div', class: '_top'){
	insert("div", class: "_cartbutton", data-ur-toggler-component: "button", data-ur-id: "cart"){
	insert("div", class: "menu-shopping")
	}
	insert("div", class: "_eyeGlass", data-ur-toggler-component: "button", data-ur-id: "search"){
	insert("div", class: "menu-search")
	}
	insert_after('div', class: '_cart', data-ur-toggler-component: "content", data-ur-id: "cart"){
	insert("h2", "shopping cart"){
	wrap("a", href: "/cart")
	}
	}

	insert_after('div', class: '_search', data-ur-toggler-component: "content", data-ur-id: "search"){
	move_here("//form[contains(concat(' ', @class, ' '), ' _searchForm ')]"){
	$$('.SearchBtn'){
	attributes(type: "submit", value: "GO")
 	add_class('menu-search')
	}
		
	wrap("div", class: "_searchWrapper")
	}

	}
	}

	$$('.Padding5T > a'){
	add_class('_logo')
	move_to("//div[contains(concat(' ', @class, ' '), ' _top ')]")

	$('./img'){
	remove()
	}
	insert("img", src: asset("images/logo.png"))
	}

}  

}