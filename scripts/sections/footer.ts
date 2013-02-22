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
  insert("span", class: "menu-collapse")
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
   insert("span", class: "menu-collapse")
   attribute("data-ur-toggler-component") {
    value("button")
   }
   name() {
    set("h3")
  }
   add_class('_subFootMenu')
   }

   $("./p[1]"){
      name(){
      set("h4")
      }
      attribute("data-ur-toggler-component") {
    value("content")
   }

   $("./a"){
   insert("span", class: "arrows-right_white_b")
   }
   }
   }
   }
   }
	

	}
  }
