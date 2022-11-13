User.create(username: 'jd', name: 'John Doe', email: 'johndoe@example.com', password: '123')
User.create(username: 'ws', name: 'Will Sooter', email: 'wsooter@example.com', password: '123')
User.create(username: 'sm', name: 'Siobhan', email: 'sm@example.com', password: '123')
User.create(username: 'jj', name: 'James Joyce', email: 'jj@example.com', password: '123')

Follow.create(follower_id: 1, followed_id: 2)
Follow.create(follower_id: 2, followed_id: 1)
Follow.create(follower_id: 1, followed_id: 3)
Follow.create(follower_id: 3, followed_id: 1)





