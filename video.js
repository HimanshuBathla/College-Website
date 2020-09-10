
		var v = document.getElementsByClassName("myVideo");
		function playVid()
		{
			for(var i=0;i<=v.length;i++)
	        {
		        v[i].play();
		    }
		}
		function pauseVid() 
		{
		    for(var i=0;i<=v.length;i++)
	        {
		        v[i].pause();
		    }
		}
	