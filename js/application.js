const github = new Github;
const searchUser = document.getElementById('searchUser');
searchUser.addEventListener('keyup',function(e) {
	const userText = e.target.value;

	if (userText !== '') {
		//http call
		github.getUser(userText)
		.then(function(data){
			if (data.profile.message === 'Not found'){

			} else {
				console.log(data)
			}
		})

	}else{

	}
})