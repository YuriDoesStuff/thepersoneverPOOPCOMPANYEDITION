package

{

	import flash.display.MovieClip;
	import flash.external.ExternalInterface;
	
	public class main extends MovieClip

	{

		public function main()

		{
			howtesticle.text = "wow so cool";
			trace("GETTTT PENISED!!!!!!");
			ExternalInterface.call("console.log", "YAYYYYYY YOU DID IT!");

		}
		
				public function colorize(){
		
			ExternalInterface.call("function(test){
			document.body.style = 'background-color: yellow; background-image: transparent;'
			", test);
			
			trace("okay cool");
			ExternalInterface.call("console.log", "you did it again!!!! i'm so proud");
		}
		
	}

}
