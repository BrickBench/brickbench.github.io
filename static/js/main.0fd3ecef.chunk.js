(this["webpackJsonpbrick-bench"]=this["webpackJsonpbrick-bench"]||[]).push([[0],{12:function(e){e.exports=JSON.parse('{"faq":[{"q":"When is editing coming?","a":"Editing is going to be a goal for the future, but we are focusing on improving accuracy first before doing editing."},{"q":"Mac Version?","a":"Not yet."},{"q":"How can I contribute?","a":"We\'re currently considering options for how to do source contributions, we\'ll keep this page updated as it goes. If you have any open source tools you would like to get added to this, feel free to contact us!"},{"q":"I want to request a feature or report a bug. How can I do so?","a":"If you have a Github account, you can go to the Issues page above and make an issue with the tag Enhancement, and we\'ll check it out."},{"q":"I have another question or comment.","a":"You can use the new Discussions feature in Github above to ask anything to the community!"}],"fileTypes":[{"type":".gsc","desc":"(Game Scene) This file contains the map scene. This includes all rendering related objects, splines, culling portals, and others."},{"type":".ter","desc":"(Terrain) This file contains all collision related objects. This includes terrain groups, infinite walls, and terrain platforms."},{"type":".giz","desc":"(Gizmo) This file contains all gizmos for the map. Gizmos include most interactable objects, but do not include their graphical elements (the actual panel for GizPanel, textures for GizPickup, etc), as those are either in THINGS.GSC or in the map GSC file."},{"type":".ai2","desc":"(AI) This file contains data relating to AI characters, known in the engine as creatures. This includes their spawn locations, locators for use in script files, and the AI pathfinding mesh."},{"type":".txt","desc":"This file contains various miscellaneous pieces of information about the map. It contains various values to pre-make storage for game objects, sets up cameras and doors, and creastes various objects that rely on data from multiple files."}],"objectTypes":[{"type":"Static Render Mesh","desc":"is used to identify parts of the viewable scene that cannot change."},{"type":"Special Objects","desc":"are rendered objects that can be moved. These are often used as a base to attach other objects to (eg. A PushBlock might attach itself to a special object to keep track of the block\'s position)"},{"type":"Splines","desc":"are a list of points in space, often representing a line, used for a variety of tasks. Some examples are for camera paths, vehicle paths in levels like Podrace, and to define areas for doors."},{"type":"Terrain Group / Terrain Platform","desc":"refers to the mesh used for 3D collision. Each section is known as a terrain group. Each triangle in the terrain group can have special properties attached like slipperiness, killplanes, etc. A collision mesh that moves is attached to a special object, and is known as a terrain platform."},{"type":"Collision Walls","desc":"are areas that represent an infinite vertical wall used for collision. These are always static."},{"type":"Gizmos","desc":"are a broad category of objects that have some interactive behavior. Some examples are pickup coins, panels, and pushable blocks"},{"type":"Triggers","desc":"are boxes in space that can be used by scripts to define custom behavior, such as spawning enemies when the player enters an area."},{"type":"Doors","desc":"represent transitions between and within levels. Each door has a door area that defines where the entry is, and a spline coming out that defines where the players are dropped off. In most cases in TCS, if a door has a different map as its target, an identically named door should exist in the other map, and the spline leading from that identical door in the other level (the door is usually located out of the boundaries of the map), will lead to where you end up after transitioning."},{"type":"AI Locators","desc":"are points in space that the AI can use in scripts as targets."},{"type":"Creature Spawns","desc":"are locations where creatures (enemies, friends, vehicles, etc) spawn when the level loads."},{"type":"Portals","desc":"are used to define zones for rendering culling."}]}')},21:function(e){e.exports=JSON.parse('{"faq":[{"q":"When is editing coming?","a":"Editing is going to be a goal for the future, but we are focusing on improving accuracy first before doing editing."},{"q":"Mac Version?","a":"Not yet."},{"q":"How can I contribute?","a":"We\'re currently considering options for how to do source contributions, we\'ll keep this page updated as it goes. If you have any open source tools you would like to get added to this, feel free to contact us!"},{"q":"I want to request a feature or report a bug. How can I do so?","a":"If you have a Github account, you can go to the Issues page above and make an issue with the tag Enhancement, and we\'ll check it out."},{"q":"I have another question or comment.","a":"You can use the new Discussions feature in Github above to ask anything to the community!"}]}')},22:function(e){e.exports=JSON.parse('{"screenshotFilenames":["betrayal1.png","betrayal2.png","betrayal3.png","betrayal4.png","carkoon1.png","carkoon2.png","city1.png","city2.png","dagobah1.png","dagobah2.png","dagobah3.png","dagobah4.png","darthvader1.png","dse1.png","dse2.png","itds1.png","itds2.png","jedibattle1.png","jedibattle2.png","jedibattle3.png","jundland1.png","jundland2.png","jundland3.png","jundland4.png","kamino1.png","kamino2.png","kamino3.png","podrace1.png","podrace10.png","podrace2.png","podrace3.png","podrace4.png","podrace5.png","podrace6.png","podrace7.png","podrace8.png","podrace9.png","rebel1.png","rebel2.png","rebel3.png","ruin1.png","ruin2.png","ruin3.png","speeder1.png","speeder2.png","speeder3.png","speeder4.png","theed1.png","theed2.png","theed3.png"]}')},31:function(e,t,s){},36:function(e,t,s){"use strict";s.r(t);var i=s(0),a=s(1),n=s.n(a),c=s(19),r=s.n(c),l=(s(29),s(31),s(7));function o(){return Object(i.jsxs)("nav",{style:{height:"4.2em"},className:"navbar sticky-top navbar-expand-lg dark-bottom text-light bg-middle",children:[Object(i.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(i.jsx)("span",{className:"navbar-toggler-icon"})}),Object(i.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNavAltMarkup",children:Object(i.jsxs)("div",{className:"navbar-nav w-100 justify-content-around align-items-center",children:[Object(i.jsx)(l.b,{activeClassName:"text-primary",className:"nav-item",to:"/get",children:"Get BrickBench"}),Object(i.jsx)(l.b,{activeClassName:"text-primary",className:"nav-item",to:"/usage",children:"Usage"}),Object(i.jsx)(l.b,{activeClassName:"text-primary",className:"nav-item",to:"/",children:Object(i.jsx)("img",{src:"./images/brick-bench.png",style:{height:"3.8em"},className:"img-fluid"})}),Object(i.jsx)(l.b,{activeClassName:"text-primary",className:"nav-item",to:"/faq",children:"FAQ"}),Object(i.jsx)(l.b,{activeClassName:"text-primary",className:"nav-item",to:"/screenshots",children:"Screenshots"})]})})]})}function d(){return Object(i.jsxs)("footer",{style:{minHeight:"3.2em"},className:"bg-middle p-3",children:[Object(i.jsxs)("div",{className:"d-flex justify-content-around align-items-start mb-4",children:[Object(i.jsxs)("div",{children:[Object(i.jsx)("h5",{children:"Developer"}),Object(i.jsx)("a",{className:"link",href:"#",children:"Docs"})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("h5",{children:"Community"}),Object(i.jsx)("a",{className:"link",href:"#",children:"Discord"}),Object(i.jsx)("br",{}),Object(i.jsx)("a",{className:"link",href:"#",children:"Twitter"})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("h5",{children:"Project"}),Object(i.jsx)("a",{className:"link",href:"#",children:"Github"})]})]}),Object(i.jsxs)("div",{className:"d-flex flex-column align-items-center",children:[Object(i.jsx)("img",{src:"./images/brick-bench.png",style:{height:"1.6em"},className:"img-fluid"}),Object(i.jsx)("small",{className:"text-primary",children:"Copyright \xa9 2021, BrickBench"})]})]})}function h(e){var t=e.inline?"d-inline":"d-block";return Object(i.jsx)("div",{className:"bg-top rounded p-1 m-1 code "+t,children:e.children})}function j(){return Object(i.jsx)("div",{className:"container-fluid",children:"home"})}var b=s(10),p=s.n(b),m=s(12);function u(){var e=this;return Object(a.useEffect)((function(){console.log("scroll spy refresh!"),p()('[data-spy="scroll"]').each((function(){p()(e).scrollspy("refresh")}))}),[]),Object(i.jsx)("div",{className:"container-fluid",children:Object(i.jsxs)("div",{className:"row",children:[Object(i.jsx)("div",{className:"col-3",children:Object(i.jsxs)("div",{id:"spy-target",className:"p-2 list-group list-group-flush w-100 sidebar dark-bottom rounded",children:[Object(i.jsx)("a",{className:"list-group-item list-group-item-action",href:"#overview",children:"Overview"}),Object(i.jsx)("a",{className:"list-group-item list-group-item-action",href:"#controls",children:"Controls"}),Object(i.jsx)("a",{className:"list-group-item list-group-item-action",href:"#file-types",children:"File Types"}),Object(i.jsx)("a",{className:"list-group-item list-group-item-action",href:"#object-types",children:"Object Types"})]})}),Object(i.jsx)("div",{className:"col-6 p-2",children:Object(i.jsxs)("div",{className:"px-4 m-2 dark-bottom",children:[Object(i.jsxs)("div",{id:"overview",children:[Object(i.jsx)("h1",{children:"Overview"}),Object(i.jsxs)("p",{children:["BrickBench is a tool for loading map files for the early TT Games games using the ",Object(i.jsx)(h,{inline:!0,children:Object(i.jsx)("code",{className:"reserved",children:".gsc"})}),"file format (",Object(i.jsx)("a",{className:"link",href:"#",children:"Lego Star Wars: The Complete Saga"}),",\xa0",Object(i.jsx)("a",{className:"link",href:"#",children:"Lego Indiana Jones"}),",\xa0 and ",Object(i.jsx)("a",{className:"link",href:"#",children:"Lego Batman"}),")."]}),Object(i.jsx)("p",{children:"The focus is on TCS, but LIJ and Batman have increasing compatibility as well."}),Object(i.jsx)("p",{children:"BrickBench currently supports the following files on PC:"}),Object(i.jsx)("div",{className:"d-flex flex-wrap justify-content-center",children:m.fileTypes.map((function(e){var t=e.type;return Object(i.jsx)(h,{inline:!0,children:Object(i.jsx)("code",{className:"reserved",children:t})},t)}))}),Object(i.jsx)("p",{children:"There are two options for loading:"}),Object(i.jsxs)("ul",{children:[Object(i.jsx)("li",{children:"Load a specific file by selecting the file in the file explorer popup or dragging it into the window."}),Object(i.jsxs)("li",{children:["Load all relevant map files for a map by selecting the file directory in the file explorer popup, or dragging a directory into the window.",Object(i.jsx)("ul",{children:Object(i.jsxs)("li",{children:["For ",Object(i.jsx)(h,{inline:!0,children:Object(i.jsx)("code",{className:"reserved",children:".ai2"})})," files to load with the directory option, they should be included in a subdirectory called AI in the map directory."]})})]})]}),Object(i.jsx)("p",{children:"Once a map is loaded, information about the various subcomponents of the map such as triggers, locators for scripts, and splines can be viewed on the left."}),Object(i.jsx)("p",{children:'You can adjust various settings such as sensitivity and your default home directory in the "Settings" menu under File. To view more details about a specific setting or menu bar item, hover over it and a tooltip will appear.'})]}),Object(i.jsxs)("div",{id:"controls",children:[Object(i.jsx)("h1",{children:"Controls"}),Object(i.jsxs)("ul",{children:[Object(i.jsxs)("li",{children:[Object(i.jsx)(h,{inline:!0,children:Object(i.jsx)("code",{className:"reserved",children:"WASD"})}),"to move."]}),Object(i.jsx)("li",{children:"Mouse to rotate the camera."}),Object(i.jsxs)("li",{children:[Object(i.jsx)(h,{inline:!0,children:Object(i.jsx)("code",{className:"reserved",children:"Enter"})}),"to toggle locking the mouse cursor for camera movement."]}),Object(i.jsxs)("li",{children:[Object(i.jsx)(h,{inline:!0,children:Object(i.jsx)("code",{className:"reserved",children:"0-9"})}),"to toggle rendering for the top menu."]}),Object(i.jsxs)("li",{children:[Object(i.jsx)(h,{inline:!0,children:Object(i.jsx)("code",{className:"reserved",children:"G"})}),"to move to a specific position."]}),Object(i.jsxs)("li",{children:[Object(i.jsx)(h,{inline:!0,children:Object(i.jsx)("code",{className:"reserved",children:"C"})}),"to toggle compact mode."]}),Object(i.jsxs)("li",{children:[Object(i.jsx)(h,{inline:!0,children:Object(i.jsx)("code",{className:"reserved",children:"H"})}),"to toggle shadows."]}),Object(i.jsxs)("li",{children:[Object(i.jsx)(h,{inline:!0,children:Object(i.jsx)("code",{className:"reserved",children:"L"})}),"to open the load menu."]}),Object(i.jsxs)("li",{children:[Object(i.jsx)(h,{inline:!0,children:Object(i.jsx)("code",{className:"reserved",children:"R"})}),"to reset the view to the origin."]}),Object(i.jsxs)("li",{children:[Object(i.jsx)(h,{inline:!0,children:Object(i.jsx)("code",{className:"reserved",children:"V"})}),"to open a movement speed prompt."]}),Object(i.jsxs)("li",{children:[Object(i.jsx)(h,{inline:!0,children:Object(i.jsx)("code",{className:"reserved",children:"+"})}),"and ",Object(i.jsx)(h,{inline:!0,children:Object(i.jsx)("code",{className:"reserved",children:"-"})}),"or scrollwheel to change movement speed."]})]})]}),Object(i.jsxs)("div",{id:"file-types",children:[Object(i.jsx)("h1",{children:"File Types"}),Object(i.jsx)("p",{children:"The TT Games engine has various file types used for map loading. The following are supported by BrickBench:"}),Object(i.jsx)("ul",{children:m.fileTypes.map((function(e){var t=e.type,s=e.desc;return Object(i.jsxs)("li",{children:[Object(i.jsx)(h,{inline:!0,children:Object(i.jsx)("code",{className:"reserved",children:t})},t),Object(i.jsx)("span",{children:s})]})}))})]}),Object(i.jsxs)("div",{id:"object-types",children:[Object(i.jsx)("h1",{children:"Object Types"}),Object(i.jsx)("p",{children:"This is a quick reference to what the objects in the top bar and search area are:"}),Object(i.jsx)("ul",{children:m.objectTypes.map((function(e){var t=e.type,s=e.desc;return Object(i.jsxs)("li",{children:[Object(i.jsx)("span",{className:"text-primary font-weight-bold",children:t+" "}),Object(i.jsx)("span",{children:s})]})}))}),Object(i.jsx)("p",{children:"If you want more detail or to find where these objects are stored, please consult the documentation at (NOT DONE YET)"})]})]})}),Object(i.jsx)("div",{className:"col-3",children:Object(i.jsxs)("div",{className:"dark-bottom sidebar p-2",children:[Object(i.jsx)("h5",{children:"Related Content"}),Object(i.jsx)("a",{className:"link",href:"#",children:"Where can I download these games?"}),Object(i.jsx)("br",{}),Object(i.jsx)("a",{className:"link",href:"#",children:"How do I access game data files?"})]})})]})})}var g=s(11);function x(){var e=n.a.useState("windows"),t=Object(g.a)(e,2),s=t[0],a=t[1],c="windows"===s;return Object(i.jsxs)("div",{className:"container-lg",children:[Object(i.jsxs)("div",{className:"rounded p-2 m-2 bg-middle dark-bottom",children:[Object(i.jsxs)("div",{className:"d-flex",children:[Object(i.jsx)("button",{className:"btn flex-fill "+(c?"active":""),onClick:function(){return a("windows")},children:Object(i.jsx)("img",{style:{height:"4em"},src:"./images/windows.png",className:"img-fluid"})}),Object(i.jsx)("button",{className:"btn flex-fill "+(c?"":"active"),onClick:function(){return a("linux")},children:Object(i.jsx)("img",{style:{height:"3em"},src:"./images/linux.png",className:"img-fluid"})})]}),c?Object(i.jsx)(f,{}):Object(i.jsx)(O,{}),Object(i.jsx)("div",{className:"text-primary text-center",children:"And you're good to go!"})]}),Object(i.jsx)("div",{className:"rounded p-2 m-2 bg-middle dark-bottom",children:Object(i.jsx)("small",{children:"(CHANGE LOG HERE)"})})]})}var f=function(){return Object(i.jsxs)("ol",{children:[Object(i.jsxs)("li",{children:["Download the latest version of BrickBench: ",Object(i.jsx)("a",{className:"link",href:"#",children:"brickbench-windows.jar"})]}),Object(i.jsxs)("li",{children:["Unzip the ",Object(i.jsx)(h,{inline:!0,children:Object(i.jsx)("code",{className:"reserved",children:".zip"})})," archive from the Releases page."]}),Object(i.jsxs)("li",{children:["Double click the ",Object(i.jsx)(h,{inline:!0,children:Object(i.jsx)("code",{className:"reserved",children:"run.bat"})})," file to execute the local installation."]})]})},O=function(){return Object(i.jsxs)("ol",{children:[Object(i.jsxs)("li",{children:["Download the latest version of BrickBench: ",Object(i.jsx)("a",{className:"link",href:"#",children:"brickbench-linux.jar"})]}),Object(i.jsxs)("li",{children:["Unzip the ",Object(i.jsx)(h,{inline:!0,children:Object(i.jsx)("code",{className:"reserved",children:".zip"})})," archive from the Releases page."]}),Object(i.jsxs)("li",{children:["Double click the ",Object(i.jsx)(h,{inline:!0,children:Object(i.jsx)("code",{className:"reserved",children:"run.sh"})})," file to execute the local installation."]})]})},v=s(21);function y(){return Object(i.jsxs)("div",{className:"container-lg p-5",children:[Object(i.jsx)("h1",{children:"Frequently Asked Questions"}),v.faq.map((function(e,t){var s=e.q,a=e.a;return Object(i.jsxs)("div",{children:[Object(i.jsx)("h4",{className:"text-primary font-italic",children:s}),Object(i.jsx)("p",{children:a})]})}))]})}var N=s(22);function w(){var e=Object(a.useState)(""),t=Object(g.a)(e,2),s=t[0],n=t[1];return Object(i.jsxs)("div",{className:"container-fluid",children:[Object(i.jsx)("div",{className:"modal fade",id:"imageModal",tabIndex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",children:Object(i.jsx)("div",{className:"modal-dialog modal-dialog-centered modal-lg",role:"document",children:Object(i.jsx)("img",{src:"./images/screenshots/"+s,className:"img-fluid rounded"})})}),Object(i.jsx)("div",{className:"d-flex flex-wrap",children:N.screenshotFilenames.map((function(e){return Object(i.jsx)("img",{"data-toggle":"modal","data-target":"#imageModal",onClick:function(){n(e)},src:"./images/screenshots/"+e,alt:"",className:"screenshot img-fluid m-4 rounded",style:{height:"10em"}},e)}))})]})}var k=s(2);var T=function(){return Object(i.jsx)(l.a,{children:Object(i.jsxs)("div",{style:{display:"flex",minHeight:"100vh",flexDirection:"column"},children:[Object(i.jsx)(o,{}),Object(i.jsx)("div",{style:{flex:"2"},children:Object(i.jsxs)(k.c,{children:[Object(i.jsx)(k.a,{path:"/get",children:Object(i.jsx)(x,{})}),Object(i.jsx)(k.a,{path:"/usage",children:Object(i.jsx)(u,{})}),Object(i.jsx)(k.a,{path:"/faq",children:Object(i.jsx)(y,{})}),Object(i.jsx)(k.a,{path:"/screenshots",children:Object(i.jsx)(w,{})}),Object(i.jsx)(k.a,{path:"*",children:Object(i.jsx)(j,{})})]})}),Object(i.jsx)(d,{})]})})},I=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,37)).then((function(t){var s=t.getCLS,i=t.getFID,a=t.getFCP,n=t.getLCP,c=t.getTTFB;s(e),i(e),a(e),n(e),c(e)}))};r.a.render(Object(i.jsx)(n.a.StrictMode,{children:Object(i.jsx)(T,{})}),document.getElementById("root")),I()}},[[36,1,2]]]);
//# sourceMappingURL=main.0fd3ecef.chunk.js.map