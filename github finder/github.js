<<<<<<< HEAD
class Github {
  constructor() {
    this.client_id = "e932ba1d163e2d200af4";
    this.client_secret = "0e1ae9f3a7ec4b8dbdf6ab4108dd7af75030dfbb";
    this.repos_count = 5;
    this.repos_sort = "created: asc";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    console.log(profileResponse);

    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile,
      repos,
    };
  }
}
=======
class Github {
  constructor() {
    this.client_id = "e932ba1d163e2d200af4";
    this.client_secret = "0e1ae9f3a7ec4b8dbdf6ab4108dd7af75030dfbb";
    this.repos_count = 5;
    this.repos_sort = "created: asc";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    console.log(profileResponse);

    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile,
      repos,
    };
  }
}
>>>>>>> c8108f070a16fa8f4c4a3666471bc8634c064e5c
