$("./body") {
add_class('_home')
remove(".//br")
table_dump(".//table")
$(".//div[contains(concat(' ', @class, ' '), ' BodyContent ')]"){

insert_top("div", class: "_navigation"){
	copy_here("//div[@id='Clothing']")
	copy_here("//div[@id='Footwear']")
	copy_here("//div[@id='Hardware']")
	copy_here("//div[@id='Brands']")
	copy_here("//div[@id='Info']")
	$("./div"){
	attributes(class: "_category", data-ur-set: "toggler")

	$("./div[1]"){
	attributes(data-ur-toggler-component: "button")
	$("./p"){
		insert("span", class: "menu-collapse")
	}
	}
	$("./ul"){
	attribute("data-ur-toggler-component", "content")
	}
	$("./ul/li"){
	attributes(class: "_subCategory", data-ur-set: "toggler")
	remove("@style")
	$(".//a"){
	insert("span", class: "arrows-right_blue_m")
	}	
	$(".//p"){
	attributes(data-ur-toggler-component: "button")
	insert("span", class: "menu-collapse")
	}
	$(".//ul"){
	attributes(data-ur-toggler-component: "content")
	}
	$("./div"){
	remove("@class")
	remove("@style")
	}
	}
	$("//div[@id='Footwear']/ul/li[2]/div"){
	attributes(data-ur-set: "toggler")
	}
	$("//div[@id='Footwear']/ul/li[4]/div"){
	attributes(data-ur-set: "toggler")
	}
	}
	insert_after("div", class: "_subnav"){
	copy_here("//div[contains(concat(' ', @class, ' '), ' SubNav ')]")
	$("./div"){
	attributes(class: "_category2"){
	$("./ul"){
	$("./li"){
	add_class("_temp")
	}
	copy_here("./li/a",position("top"))
	copy_here("//a[contains(concat(' ', @class, ' '), ' ThemeLink ')]", position())
	$("./a"){
	insert("span", class: "arrows-right_white_b")
	wrap("li")
	}
	$("./li[contains(concat(' ', @class, ' '), ' _temp ')]"){
	remove()
	}
	}
	}
	}	
	}	

}
insert_top("div", id: "mw_heroSlider", data-ur-state: "enabled", data-ur-autoscroll: "enabled", data-ur-infinite: "enabled", data-ur-android3d: "enabled", data-ur-id: "home", data-ur-autoscroll-delay: "4000", data-ur-fill: "1", data-ur-carousel-component: "view_container", data-ur-set: "carousel", data-ur-vertical-scroll: "enabled", data-ur-touch: "enabled", data-ur-center: "disabled", data-ur-clones: "1", data-ur-auto-dir: "next"){
	insert("div", data-ur-carousel-component: "dots")
	insert("div", data-ur-carousel-component: "scroll_container"){
	insert("img", src: asset("images/tg_hero01.jpg"), data-ur-carousel-component: "item", alt: "1")
	insert("img", src: asset("images/tg_hero02.jpg"), data-ur-carousel-component: "item", alt: "2")
	insert("img", src: asset("images/tg_hero03.jpg"), data-ur-carousel-component: "item", alt: "3")
	insert("img", src: asset("images/tg_hero04.jpg"), data-ur-carousel-component: "item", alt: "4")
	}
	}
}
$("//header/div[last()]"){
	remove()
}
$("//header/div[last()]"){
	remove()
}
$("//div[contains(concat(' ', @class, ' '), ' LC3 ')]"){
	remove()
}
$("//div[contains(concat(' ', @class, ' '), ' Border ')]"){
	remove()
}
$("//div[contains(concat(' ', @class, ' '), ' Floatleft ')]"){
	remove()
}
$("//div[contains(concat(' ', @class, ' '), ' Clear ')]"){
	remove()
}
$("//div[contains(concat(' ', @class, ' '), ' recentlyViewedHolder ')]"){
	remove()
}
$("//div[contains(concat(' ', @class, ' '), ' heroContainer ')]"){
	remove()
}
$("//div[@id='HelpWindow']"){
	remove()
}
}