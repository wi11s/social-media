User.create(username: 'jd', name: 'John Doe', email: 'johndoe@example.com', password: '123', avatar: 'https://t3.ftcdn.net/jpg/03/53/11/00/360_F_353110097_nbpmfn9iHlxef4EDIhXB1tdTD0lcWhG9.jpg', bio: 'who am i', birthday: '00/00/00', location: 'Unknown')
User.create(username: 'ws', name: 'Will Sooter', email: 'wsooter@example.com', password: '123', avatar: 'https://ca.slack-edge.com/T02MD9XTF-U03UPK1371S-a870d97114d3-512', bio: 'booyah', birthday: '02/11/00', location: 'New York, NY')
User.create(username: 'sm', name: 'Siobhan', email: 'sm@example.com', password: '123', avatar: 'https://ca.slack-edge.com/T02MD9XTF-U03UWK9Q6SV-30405ee4f567-512', bio: 'here to joke & lie', birthday: '07/09/1996', location: 'New York, NY')
User.create(username: 'DTrump', name: 'Donald Trump', email: 'dt@example.com', password: '123', avatar: 'https://cdn.cnn.com/cnnnext/dam/assets/221109104540-donald-trump-florida-221108-large-169.jpg', bio: 'ur fired', birthday: '06/14/46', location: '')
User.create(username: 'Rihanna', name: 'Rihanna Fenty', email: 'fenty@example.com', password: '123', avatar: 'https://www.billboard.com/wp-content/uploads/2022/10/rihanna-wakanda-forever-carpet-2022-billboard-1548.jpg?w=942&h=623&crop=1', bio: 'fenty', birthday: '02/20/88', location: 'Los Angeles, CA')
User.create(username: 'Yeezus', name: 'Kanye West', email: 'mrwest@example.com', password: '123', avatar: 'https://pbs.twimg.com/profile_images/1148230318911963136/QO3WaOWg_400x400.jpg', bio: 'ye', birthday: '06/08/77', location: 'Wyoming')
User.create(username: 'ElonMusk', name: 'Elon Musk', email: 'god@example.com', password: '123', avatar: 'https://pbs.twimg.com/profile_images/1590968738358079488/IY9Gx6Ok_400x400.jpg', bio: 'king of twitter', birthday: '06/28/71', location: 'Boca Chica, TX')
User.create(username: 'VHH', name: 'Harry Hill', email: 'hh@example.com', password: '123', avatar: 'https://pbs.twimg.com/profile_images/1143496127280504832/g_ITDO2d_400x400.jpg', bio: 'Balenciaga-clad philosopher', birthday: '10/04/94', location: 'New York, NY')
User.create(username: 'taylorswift', name: 'Taylor Swift', email: 'ts@example.com', password: '123', avatar: 'https://pbs.twimg.com/profile_images/1564101520043479043/eJpWqka2_400x400.jpg', bio: 'midnights', birthday: '12/13/89', location: 'London, UK')


Follow.create(follower_id: 1, followed_id: 2)
Follow.create(follower_id: 2, followed_id: 1)
Follow.create(follower_id: 8, followed_id: 9)
Follow.create(follower_id: 3, followed_id: 1)
Follow.create(follower_id: 9, followed_id: 8)
Follow.create(follower_id: 3, followed_id: 8)
Follow.create(follower_id: 3, followed_id: 9)
Follow.create(follower_id: 2, followed_id: 3)
Follow.create(follower_id: 6, followed_id: 7)
Follow.create(follower_id: 6, followed_id: 9)
Follow.create(follower_id: 4, followed_id: 5)
Follow.create(follower_id: 5, followed_id: 8)
Follow.create(follower_id: 7, followed_id: 6)
Follow.create(follower_id: 7, followed_id: 6)


Post.create(content: 'hi', image: '', user_id: 1)
Post.create(content: 'test', image: '', user_id: 1)
Post.create(content: 'test', image: '', user_id: 6)
Post.create(content: 'test', image: '', user_id: 8)

Reply.create(content: 'hi', image: '', post_id: 1)
Reply.create(content: 'helllll0000', image: '', post_id: 2)
Reply.create(content: 'yes', image: '', post_id: 1)
Reply.create(content: 'fidsajfi;asjdf;iasdj', image: '',post_id: 2)

Like.create(post_id: 1, user_id: 1, reply_id: 1)

JoinReply.create(parent_reply_id: 1, child_reply_id: 2)
JoinReply.create(parent_reply_id: 1, child_reply_id: 4)



Post.create(content: 'hhhhhh', user_id: 1)

Reply.create(content: 'hello', post_id: 1, user_id: 1)
Reply.create(content: 'asdg', post_id: 1, user_id: 1)
Reply.create(content: 'dddd', post_id: 1, user_id: 1)
Reply.create(content: 'dddd', post_id: 1, user_id: 1)
Reply.create(content: 'dddd', post_id: 1, user_id: 1)
Reply.create(content: 'jhgjhg', post_id: 1, user_id: 1)

JoinReply.create(parent_reply_id: 1, child_reply_id: 2)
JoinReply.create(parent_reply_id: 1, child_reply_id: 3)
JoinReply.create(parent_reply_id: 1, child_reply_id: 4)
JoinReply.create(parent_reply_id: 4, child_reply_id: 5)
JoinReply.create(parent_reply_id: 4, child_reply_id: 6)





