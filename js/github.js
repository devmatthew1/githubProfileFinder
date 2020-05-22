class Github{
	constructor(){
		this.client_id = '9331546053a9ac061146';
		this.client_secret = '4c88af960687914ef6eed60c6df2faedbeed3fe3';
	}

	async getUser(user){
		const profileRresponse = await fetch(`https://api.github.com/users/${user}?client_id = ${this.client_id}&client_secret=${this.client_secret}`);
		const profile = await profileRresponse.json();

		return {
			profile
		}
	}
}