function brfunc(){
  hidemost();
appender.innerHTML = `<h2>-- background --</h2> 
<p>sburb is a cross-platform pc game that directly affects the real world!</p>
<p>sburb typically requires at least two people to play, and comes on two disks:</p> 
<img src=/homestuck/hscrop/davecopies.gif>
<p>one has the server version, who's player enters the medium and has little interaction with the software. the other disk contains the client version (which this webpage will be focusing on), which can directly manipulate the surrounding area of a server player!</p>
<img src=/homestuck/hscrop/sburbrevise.gif>
<p>the areas that the client can edit is limited to... i would guess ~20 feet from the player.</p>
<img src=/homestuck/hscrop/outofrange.gif>
<p>the camera is also unable to follow the server player into the medium, and is limited to only what the server player has seen</p>
<img src=/homestuck/hscrop/cantsee.jpg>
`;
}

function selectfunc(){
  hidemost();
appender.innerHTML = `<h2>-- select --</h2>
<p>the select function allows you to... select things!</p>
<img src=/homestuck/hscrop/sburbpickup.gif>
<p>you're unable to pick up players though, and any objects they may be touching. not sure about other living things...</p>
<img src=/homestuck/hscrop/sburbnoplayerpickup.gif>
<img src=/homestuck/hscrop/selectplayerobject.gif>
`; 
}

function revisefunc(){
  hidemost();
 appender.innerHTML = `<h2>-- revise --</h2>
 <p>the revise tool lets you edit the structure of your coplayer's house!</p>
 <img src=/homestuck/hscrop/sburbrevise.gif>
 <p>adding onto your coplayer's home costs build grist. in short, grist is a type of resource that can be used to deploy objects, create things using the alchmiter, and use the revise tool.</p>
 <p>grist can be earned by either defeating underlings and having the player collect any dropped grist</p>
 <img src=/homestuck/hscrop/impcrush.gif> 
 <p>or by the client choosing to delete parts of buildings or various objects!</p>
 <img src=/homestuck/hscrop/revisedelete.gif> 
 <br><img src=/homestuck/hscrop/deletefromregrestryforgrist.gif>
 <p>while revising, you can also create platforms</p>
 <img src=/homestuck/hscrop/reviseplatform.gif>
 <p>and stairs,</p> 
 <img src=/homestuck/hscrop/revisestairs.gif>
 <p>while also being able to duplicate parts of buildings!</p>
 <img src=/homestuck/hscrop/revisedupe.gif>`;
}

function deployfunc(){
  hidemost();
appender.innerHTML = `<h2>-- deploy --</h2>
<p>the deploy function allows you to deploy objects from each submenu!</p>
<img src=/homestuck/hscrop/sburbdeploy.gif>
<p>that's it, really...</p>`; 
}

function regfunc(){
  hidemost();
appender.innerHTML = `<h2>-- phernalia registry --</h2>
<p>the phernalia registry is a menu that holds objects that you can deploy with grist, and that you can store items in!</p>
<img src=/homestuck/hscrop/sburbphernaliaregestry.gif>
<p>to store an item in the registry, you simply need to pull it into an empty slot</p>
<img src=img/regstore.gif>
<p>you can then deploy it again, or you can delete the item to regain grist!</p>
<img src=img/regdelete.gif>
<p>since the first server initially has a very small grist cap, most items required to progress into the medium cost no grist - such as the following machines:</p>
<p>the cruxtruder,</p>
<img src=/homestuck/hscrop/regcrux.gif>
<p>the alchemiter,</p>
<img src=/homestuck/hscrop/regalch.gif>
<p>the totem lathe,</p>
<img src=/homestuck/hscrop/reglathe.gif>
<p>and the unique prepunched card that corresponds to every player!</p>
<img src=/homestuck/hscrop/regprepunch.gif>
<p>for objects that cost grist, there's...</p>
<p>the punch designix, which costs 4 shale grist</p>
<img src=/homestuck/hscrop/regdesignix.gif>
<p>the jumper block extention, costs 1,000 build grist</p>
<img src=/homestuck/hscrop/regjumperblock.gif>
<p>a cd containing gristtorrent, which costs 100 build grist</p>
<img src=/homestuck/hscrop/reggristtor.gif>
<br><img src=/homestuck/hscrop/gristtorrunning.gif>
<p>and the holopad, which costs 10,000 build grist!</p>
<img src=img/regholopad.gif>
<p>both you and the server player can interact with these objects... i'll go over how to in a seperate guide from this :p</p>

`; 
}

function gristfunc(){
  hidemost();
  appender.innerHTML= `<h2>-- grist cache --</h2>
  <p>the grist cache displays how much of each type of grist you heave!</p>
  <img src=img/gristcache.gif>
  <p>if you haven't encountered a way to get a certain type of grist, it will be covered by a questionmark. however, this behaviour is ignored for any types of grist that will be formed within the underlings when your coplayers prototype their sprites! curiously, your very own grist type seems to be unknown from the start...</p>`;
}

function anthfunc(){
  hidemost();
  appender.innerHTML=`<h2>-- atheneum --</h2>
<p>the atheneum is a handy menu that lets you see what items you can create with cruxite dowels you have lathed!</p> 
<img src=img/atheneum.gif>
<p>that's literally it</p>`;
}

function alchfunc(){
  hidemost();
  appender.innerHTML=`<h2>-- alchemy excursus --</h2>
  <p>the alchemy excursus, similary to the atheneum, displays all combinations that you can create with punched cards!</p>
  <img src=img/alchemy.gif>
  <p>yay?</p>`;
}