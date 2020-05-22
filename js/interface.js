class Ui{
	constructor(){
		this.profile = document.getElementById('profile');
	}

	showProfile(user){
		console.log(user);
		this.profile.innerHTML = `
		<div class="card card-body mb-3">
			<div class="row">
				<div class="col-md-3">
					<img src="${user.avatar_url}" class="img-fluid mb-2">	
					<a href="${user.html_url}" target="_blank" class="btn bg-primary btn-block mb-4">view profile</a>
				</div>
				<div class="col-md-9">
					<span class="badge badge-primary" > Public Repo: ${user.public_repos} </span>
					<span class="badge badge-primary" > Public Gist: ${user.public_gists} </span>
					<span class="badge badge-primary" > Followers: ${user.followers} </span>
					<span class="badge badge-primary" > Following: ${user.following} </span>
					<br><br>
					<ul class="list-group">
						<li class="list-group-item">company : ${user.company}</li>
						<li class="list-group-item">Website : ${user.blog}</li>
						<li class="list-group-item">Location : ${user.location}</li>
						<li class="list-group-item">Member since : ${user.created_at}</li>
					</ul>
				</div>
			</div>
		</div>		
		<h3 class="page-heading mb-3">Latest Repo</h3>

		`
		;
	}
}