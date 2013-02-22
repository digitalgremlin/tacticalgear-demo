$("./body") {

	$("//footer"){
	add_class('_footer')
	remove(".//br")
	$("//div[contains(concat(' ', @class, ' '), ' FooterBox1 ')]"){
	add_class('_menuContainer')
	}
	$("//div[contains(concat(' ', @class, ' '), ' _menuContainer ')]"){
	attribute("data-ur-set") {
    value("toggler")
   }
	insert_top("h2", class: "_menuTitle", "Footer Menu"){
	attribute("data-ur-toggler-component") {
    value("button")
   }
   }
     
   wrap_together("./div", "div", data-ur-toggler-component: "content", class: "_footMenus"){
   $("./div"){
   attribute("data-ur-set"){
   value("toggler")
   }
   $("./p[1]"){
   attribute("data-ur-toggler-component") {
    value("button")
   }
   add_class('_subFootMenu')
   }

   $("./p[2]"){
   attribute("data-ur-toggler-component") {
    value("content")
   }
   
   }
   }
   }
   }
	

	}
  }
