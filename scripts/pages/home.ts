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