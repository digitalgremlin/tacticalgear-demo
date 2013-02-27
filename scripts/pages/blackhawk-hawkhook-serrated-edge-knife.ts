$("./body") {
add_class('_blackhawk')
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
$("//div[contains(concat(' ', @class, ' '), ' CatalogSort ')]/ul"){
	remove()
}
$("//div[contains(concat(' ', @class, ' '), ' CatalogSort ')]"){
	insert("div", class: "_clear")
}
$("//div[contains(concat(' ', @class, ' '), ' PageCount ')]"){
	remove()

}
$("//div[contains(concat(' ', @class, ' '), ' Products ')]/ul/li"){
	insert_after("div", class: "_clear")
}
insert_top("div", id: "mw_mainMenu", data-ur-set: "toggler"){
	insert("h2", class: "_menuTitle", data-ur-toggler-component: "button", "Main Menu")
	insert("div", id: "mw_menuContainer", data-ur-toggler-component: "content"){
	move_here("//div[contains(concat(' ', @class, ' '), ' _navigation ')]")
	move_here("//div[contains(concat(' ', @class, ' '), ' _subnav ')]")
	}
}

}
$(".//div[contains(concat(' ', @class, ' '), ' BodyContent ')]/div[5]"){
move_to("//div[contains(concat(' ', @class, ' '), ' BreadCrumb ')]", position('after'))

}

  $("//div[contains(concat(' ', @class, ' '), ' PDThumb ')]"){
  
  move_here("//div[@id='outerDiv']", position('after')){
  attribute("data-ur-set") {
    value("toggler")
  }
  $("./div[3]"){
  attribute("data-ur-toggler-component") {
    value("content")
  }
  insert_before("h2", class: "_tabTitle", data-ur-toggler-component: "button", "Details"){
  insert("span", class: "menu-collapse")
  }
  }
  }
  }
$("//div[contains(concat(' ', @class, ' '), ' CartButtons ')]"){
	$("./div/div/div[2]/a/img"){
	insert_before("br")
	
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
$("//div[contains(concat(' ', @class, ' '), ' OverFlow ')]"){
	remove()
}
$("//div[contains(concat(' ', @class, ' '), ' ErrorBx1 ')]"){
	remove()
}
$("//div[@id='outerDiv']/div[4]"){
	remove()
}
$("//div[contains(concat(' ', @class, ' '), ' Clear ')]"){
	remove()
}
$("//div[contains(concat(' ', @class, ' '), ' recentlyViewedHolder ')]"){
	remove()
}

$("//div[@id='HelpWindow']"){
	remove()
}
$("//div[contains(concat(' ', @class, ' '), ' PDBrandDesc ')]"){
wrap("div", data-ur-set: "toggler")
attribute("data-ur-toggler-component"){
	value("content")
}
insert_before("h2", class: "_tabTitle", data-ur-toggler-component: "button", "Description"){
	insert("span", class: "menu-collapse")
}
}
$("//div[@id='reviewsTop']"){
wrap("div", data-ur-set: "toggler")
attribute("data-ur-toggler-component"){
	value("content")
}
insert_before("h2", class: "_tabTitle", data-ur-toggler-component: "button", "Reviews"){
	insert("span", class: "menu-collapse")
}
}
}
