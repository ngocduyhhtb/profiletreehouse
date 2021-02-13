const Profile = require('../business_logic/profile_search')

module.exports = {
    index: (req, res) => {
        res.render('treehouse/index');
    },
    get_search: (req, res) => {
        res.render('treehouse/search');
    },
    post_search: (req, res) => {
        const user_name = req.body.username;
        const profile = [];
        Profile(user_name)
            .then(data => {
                console.log(profile);
                res.render("treehouse/profile", {
                    avatar: data.gravatar_url,
                    username: user_name,
                    badges: data.badges.length + " Badges Earned",
                    point: data.points.total + " Total Points"
                });
            })
            .catch(() => {
                res.render("treehouse/error_profile");
            });
    },
    show: (req, res) => {
        res.render('treehouse/show');
    },
}