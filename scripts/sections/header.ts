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
	insert("div", class: "_eyeGlass", data-ur-toggler-component: "button"){
	insert("div", class: "menu-search")
	}
	
	insert_after('div', class: '_search', data-ur-toggler-component: "content"){
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