// export const Wrapper  = () => {
//     return <User city="minsk" />
// }
// type PropsType = {
//     city: string
// }
// export const User: React.FC<PropsType> = (props) => {
//     return <div>hello</div>
// }
// @ts-ignore


// export const YoutubeVideo = () => {
//     return <div>
//         <VideoHeader />
//         <VideoContent />
//         <VideoStatistics />
//     </div>
// }
// export const VideoHeader = () => {
//     return <div>
//         😀 Заголовок видео
//     </div>
// }
// export const VideoContent = () => {
//     return <div>
//         📼 Контент видео
//     </div>
// }
// export const VideoStatistics = () => {
//     return <div>
//         📊 Статистика лайков
//     </div>
// }
//
// ReactDOM.render(<div><YoutubeVideo/></div>,
//     document.getElementById('root')
// );

// type UserPropsType = {
//     name: string
//     description: string
// }
// export const User: React.FC<UserPropsType> = (props) => {
//     return <div>
//         <h1>Имя: {props.name}</h1>
//         //<div>Описание: {props.description}</div>
//     </div>
// }
// type PropsType = {
//     city: string
//     country: string
//     coords?: string
// }
// // 'belarus', 'minsk', '53.917501,27.604851'
// export const Wrapper1 = () => {
//     return <PropsComponent1 city='minsk' country={''}/>
// }
//
// export const PropsComponent1: React.FC<PropsType> = (props) => {
//     return <div>hello</div>
// }
// import ReactDOM from 'react-dom'
//
// type PagePropsType = {
//     age: number
//     name: string
//     avatarUrl: string
// }
// const Page: React.FC<PagePropsType> = (props) => {
//     return <User a={props.age} n={props.name} />
// }
// type UserPropsType = {
//     a: number
//     n: string
// }
// export const User: React.FC<UserPropsType> = (props) => {
//     return <div>name: {props.n}, age: {props.a}</div>
// }
// type NewsType = {
//     title: string
//     author: string
// }
// type ArticleType = {
//     title: string
//     date: string
//     text: string
// }
// type PagePropsType = {
//     news: NewsType[]
//     mainArticle: ArticleType
// }
// export const Page: React.FC<PagePropsType> = (props) => {
//     return <div>
//         <article>
//             <h1>Название: {props.mainArticle.title}</h1>
//             <div>{props.mainArticle.date}</div>
//             <div>{props.mainArticle.text}</div>
//         </article>
//         <aside>Articles:
//             <ul>
//                 {props.news.map(n => <li>{n.title}, {n.author}</li>)}
//             </ul>
//         </aside>
//     </div>
// }

// import React from "react";
// import ReactDOM from "react-dom";
// type UserWalletType = {
//     title: string
//     amount: number
// }
// type UserWalletPropsType = {
//     wallet: UserWalletType
// }
//
// export const UserWallet: React.FC<UserWalletPropsType> = (props) => {
//     return <div>title: {props.wallet.title}, amount: {props.wallet.amount}</div>
// }
//
// export const UserMoney = () => {
//     const wallets = [
//         {title: 'bitcoin', amount: 1},
//         {title: '$', amount: 100}
//     ]
//
//     return <div>
//         <UserWallet wallet={wallets[0]} />
//         <UserWallet wallet={wallets[1]} />
//     </div>
// }
//
// import ReactDOM from 'react-dom'
//
// export const VideoHeader = (props: {videoName: string}) => {
//     return <div>
//         😀 {props.videoName}
//     </div>
// }
// export const VideoContent = (props: {videoContent: string}) => {
//     return <div>
//         📼 <a href={props.videoContent}>{props.videoContent}</a>
//     </div>
// }
// export const VideoDescription = (props: {videoDescription: string}) => {
//     return <div>
//         📑 {props.videoDescription}
//     </div>
// }
//
// export const YoutubeVideo = (props: any) => {
//     return <div>
//         <VideoHeader videoName={props.video.name} />
//         <VideoContent videoContent={props.video.link} />
//         <VideoDescription videoDescription={props.video.description} />
//     </div>
// }
//
// export const App = () => {
//     const video = {
//         title: 'Samurai way',
//         link: 'https://www.youtube.com/watch?v=gb7gMluAeao&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8',
//         description: 'Best free react-course'
//     }
//
//     return <YoutubeVideo video={video} />
// }
//
// ReactDOM.render(<App />,
//     document.getElementById('root')
// );
//
// import ReactDOM from 'react-dom'
//
// const CrazyButton = (props: any) => {
//
//     const style = {
//         color: props.fontColor,
//         backgroundColor: props.bgColor
//     }
//
//     return <button style={style}>
//         {props.title}
//     </button>
// }
//
// export const App = () => {
//     return <div>
//         <CrazyButton title={'delete'} fontColor={'white'} bgColor={'red'}/>
//         <CrazyButton title={'add'} fontColor={'white'} bgColor={'green'}/>
//     </div>
// }
//
// ReactDOM.render(<App/>,
//     document.getElementById('root')
// )
// import ReactDOM from 'react-dom'
//
// const Son = (props: any) => {
//     return <div>
//         I am son. My name is {props.name}
//     </div>
// }
//
//
// const Father = (props: any) => {
//     return <div>
//         I am father. My name is {props.name}
//         <Son name={props.sonName} />
//     </div>
// }
//
// const Granny = (props: any) => {
//     return <div>
//         I am granny. My name is {props.name}
//         <Father name={props.fatherName} sonName={props.sonName} />
//     </div>
// }
//
// export const App = () => {
//     return <div>
//         <Granny name={'Бабуля'} fatherName={'Батя'} sonName={'Сын'}/>
//     </div>
// }
//
// ReactDOM.render(<App/>,
//     document.getElementById('root')
// )


//
// export const VideoHeader = (props: {videoName: string}) => {
//     return <div>
//         😀 {props.videoName}
//     </div>
// }
// export const VideoContent = (props: {videoContent: string}) => {
//     return <div>
//         📼 <a href={props.videoContent}>{props.videoContent}</a>
//     </div>
// }
// export const VideoDescription = (props: {videoDescription: string}) => {
//     return <div>
//         📑 {props.videoDescription}
//     </div>
// }
//
// export const YoutubeVideo = (props: any) => {
//     return <div>
//         <VideoHeader videoName={props.video.title}/>
//         <VideoContent videoContent={props.video.link}/>
//         <VideoDescription videoDescription={props.video.description}/>
//     </div>
// }
//
// export const App = () => {
//     const video = {
//         title: 'Samurai way',
//         link: 'https://www.youtube.com/watch?v=gb7gMluAeao&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8',
//         description: 'Best free react-course'
//     }
//
//     return <YoutubeVideo video={video} />
// }
//
// ReactDOM.render(<App />,
//     document.getElementById('root')
// );


// import ReactDOM from 'react-dom'
//
// const CrazyButton = (props: any) => {
//
//     const style = {
//         color: props.fontColor,
//         backgroundColor: props.bgColor
//     }
//
//     return <button style={style}>
//         {props.title}
//     </button>
// }
//
// export const App = () => {
//     return <div>
//         <CrazyButton title={'delete'} fontColor={'white'} bgColor={'red'}/>
//         <CrazyButton title={'add'} fontColor={'white'} bgColor={'green'}/>
//     </div>
// }
//
// ReactDOM.render(<App/>,
//     document.getElementById('root')
// )


//
// import React from "react";
// import ReactDOM from "react-dom";
//
// type UserWalletType = {
//     title: string
//     amount: number
// }
// type UserWalletPropsType = {
//     wallet: UserWalletType
// }
//
// export const UserWallet: React.FC<UserWalletPropsType> = (props) => {
//     return <div>title: {props.wallet.title}, amount: {props.wallet.amount}</div>
// }
//
// export const UserMoney = () => {
//     const wallets = [
//         {title: 'bitcoin', amount: 1},
//         {title: '$', amount: 100}
//     ]
//
//     return <div>
//         <UserWallet wallet={wallets[0]} />
//         <UserWallet wallet={wallets[1]} />
//     </div>
// }
// ReactDOM.render(<UserMoney/>,
//     document.getElementById('root')
// )


// import React from "react";
//
// export const Wrapper = () => {
//     return <User city="minsk"/>
// }
// type PropsType = {
//     city: string
// }
// export const User: React.FC<PropsType> = (props) => {
//     return <div>hello</div>
// }

// import ReactDOM from 'react-dom'
//
// export const YoutubeVideo = () => {
//     return <div>
//         <VideoHeader />
//         <VideoContent />
//         <VideoStatistics />
//     </div>
// }
// export const VideoHeader = () => {
//     return <div>
//         😀 Заголовок видео
//     </div>
// }
// export const VideoContent = () => {
//     return <div>
//         📼 Контент видео
//     </div>
// }
// export const VideoStatistics = () => {
//     return <div>
//         📊 Статистика лайков
//     </div>
// }
//
// ReactDOM.render(<div><YoutubeVideo/></div>,
//     document.getElementById('root')
// );


// import React from "react";
//
// type PropsType = {
//     city: string
//     country: string
//     coords?: string
// }
// // 'belarus', 'minsk', '53.917501,27.604851'
// export const Wrapper1 = () => {
//     return <PropsComponent1 city='minsk' country={''}/>
// }
//
// export const PropsComponent1: React.FC<PropsType> = (props) => {
//     return <div>hello</div>
// }


// type PagePropsType = {
//     age: number
//     name: string
//     avatarUrl: string
// }
// const Page: React.FC<PagePropsType> = (props) => {
//     return <User a={props.age} n={props.name} />
// }
// type UserPropsType = {
//     a: number
//     n: string
// }
// export const User: React.FC<UserPropsType> = (props) => {
//     return <div>name: {props.n}, age: {props.a}</div>
// }

//
// type NewsType = {
//     title: string
//     author: string
// }
// type ArticleType = {
//     title: string
//     date: string
//     text: string
// }
// type PagePropsType = {
//     news: NewsType []
//     mainArticle: ArticleType
// }
// export const Page: React.FC<PagePropsType> = (props) => {
//     return <div>
//         <article>
//             <h1>Название: {props.mainArticle.title}</h1>
//             <div>{props.mainArticle.date}</div>
//             <div>{props.mainArticle.text}</div>
//         </article>
//         <aside>Articles:
//             <ul>
//                 {props.news.map(n => <li>{n.title}, {n.author}</li>)}
//             </ul>
//         </aside>
//     </div>
// }


// export const Wrapper  = () => {
//     return <User city="minsk" />
// }
// type PropsType = {
//     city: string
// }
// export const User: React.FC<PropsType> = (props) => {
//     return <div>hello</div>
// }

// type UserPropsType = {
//     name: string
//     description: string
// }
// export const User: React.FC<UserPropsType> = (props) => {
//     return <div>
//         <h1>Имя: {props.name}</h1>
//         //<div>Описание: {props.description}</div>
//     </div>
// }
//

// type PropsType = {
//     city: string
//     country: string
//     coords?: string
// }
// // 'belarus', 'minsk', '53.917501,27.604851'
// export const Wrapper1 = () => {
//     return <PropsComponent1 country='' city='minsk'/>
// }
//
// export const PropsComponent1: React.FC<PropsType> = (props) => {
//     return <div>hello</div>
// }
//
// type PagePropsType = {
//     age: number
//     name: string
//     avatarUrl: string
// }
// const Page: React.FC<PagePropsType> = (props) => {
//     return <User a={props.age} n={props.name} />
// }
// type UserPropsType = {
//     a: number
//     n: string
// }
// export const User: React.FC<UserPropsType> = (props) => {
//     return <div>name: {props.n}, age: {props.a}</div>
// }

// type NewsType = {
//     title: string
//     author: string
// }
// type ArticleType = {
//     title: string
//     date: string
//     text: string
// }
// type PagePropsType = {
//     news: NewsType[]
//     mainArticle: ArticleType
// }
// export const Page: React.FC<PagePropsType> = (props) => {
//     return <div>
//         <article>
//             <h1>Название: {props.mainArticle.title}</h1>
//             <div>{props.mainArticle.date}</div>
//             <div>{props.mainArticle.text}</div>
//         </article>
//         <aside>Articles:
//             <ul>
//                 {props.news.map(n => <li>{n.title}, {n.author}</li>)}
//             </ul>
//         </aside>
//     </div>
// }
// type UserWalletType = {
//     title: string
//     amount: number
// }
// type UserWalletPropsType = {
//     wallet: UserWalletType
// }
//
// export const UserWallet: React.FC<UserWalletPropsType> = (props) => {
//     return <div>title: {props.wallet.title}, amount: {props.wallet.amount}</div>
// }
//
// export const UserMoney = () => {
//     const wallets = [
//         {title: 'bitcoin', amount: 1},
//         {title: '$', amount: 100}
//     ]
//
//     return <div>
//         <UserMoney wallet={wallet.title[0]} />
//         <UserMoney wallet={wallet.title[1]} />
//     </div>
// }

//
// import ReactDOM from 'react-dom'
//
// export const VideoHeader = (props: {videoName: string}) => {
//     return <div>
//         😀 {props.videoName}
//     </div>
// }
// export const VideoContent = (props: {videoContent: string}) => {
//     return <div>
//         📼 <a href={props.videoContent}>{props.videoContent}</a>
//     </div>
// }
// export const VideoDescription = (props: {videoDescription: string}) => {
//     return <div>
//         📑 {props.videoDescription}
//     </div>
// }
//
// export const YoutubeVideo = (props: any) => {
//     return <div>
//         <VideoHeader videoName=''/>
//         <VideoContent videoContent='' />
//         <VideoDescription videoDescription='' />
//     </div>
// }
//
// export const App = () => {
//     const video = {
//         title: 'Samurai way',
//         link: 'https://www.youtube.com/watch?v=gb7gMluAeao&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8',
//         description: 'Best free react-course'
//     }
//
//     return <YoutubeVideo video={video} />
// }
//
// ReactDOM.render(<App />,
//     document.getElementById('root')
// );
//
//
// import ReactDOM from 'react-dom'
//
// const CrazyButton = (props: any) => {
//
//     const style = {
//         color: props.fontColor,
//         backgroundColor: props.bgColor
//     }
//
//     return <button style={style}>
//         {props.bgColor}
//     </button>
// }
//
// export const App = () => {
//     return <div>
//         <CrazyButton title={'delete'} fontColor={'white'} bgColor={'red'}/>
//         <CrazyButton title={'add'} fontColor={'white'} bgColor={'green'}/>
//     </div>
// }
//
// ReactDOM.render(<App/>,
//     document.getElementById('root')
// )

// import ReactDOM from 'react-dom'
//
// const Son = (props: any) => {
//     return <div>
//         I am son. My name is {props.name}
//     </div>
// }
//
//
// const Father = (props: any) => {
//     return <div>
//         I am father. My name is {props.name}
//         <Son name={props.sonName} />
//     </div>
// }
//
// const Granny = (props: any) => {
//     return <div>
//         I am granny. My name is {props.name}
//         <Father name={props.fatherName} sonName={props.sonName} />
//     </div>
// }
//
// export const App = () => {
//     return <div>
//         <Granny name={'Бабуля'} fatherName={'Батя'} sonName={'Сын'}/>
//     </div>
// }
//
// ReactDOM.render(<App/>,
//     document.getElementById('root')
// )


// 02.06
// import ReactDOM from 'react-dom'
//
// const Son = (props: any) => {
//     return <div>
//         I am son. My name is {props.name}
//     </div>
// }
//
//
// const Father = (props: any) => {
//     return <div>
//         I am father. My name is {props.name}
//         <Son name={props.sonName} />
//     </div>
// }
//
// const Granny = (props: any) => {
//     return <div>
//         I am granny. My name is {props.name}
//         <Father name={props.fatherName} sonName={props.sonName} />
//     </div>
// }
//
// export const App = () => {
//     return <div>
//         <Granny xxx={'Бабуля'} xxx={'Батя'} xxx={'Сын'}/>
//     </div>
// }
//
// ReactDOM.render(<App/>,
//     document.getElementById('root')
// )

// import ReactDOM from 'react-dom'
//
// const CrazyButton = (props: any) => {
//
//     const style = {
//         color: props.fontColor,
//         backgroundColor: props.bgColor
//     }
//
//     return <button style={style}>
//         {props.title}
//     </button>
// }
//
// export const App = () => {
//     return <div>
//         <CrazyButton title={'delete'} fontColor={'white'} bgColor={'red'}/>
//         <CrazyButton title={'add'} fontColor={'white'} bgColor={'green'}/>
//     </div>
// }
//
// ReactDOM.render(<App/>,
//     document.getElementById('root')
// )


// import ReactDOM from 'react-dom'
//
// export const VideoHeader = (props: {videoName: string}) => {
//     return <div>
//         😀 {props.videoName}
//     </div>
// }
// export const VideoContent = (props: {videoContent: string}) => {
//     return <div>
//         📼 <a href={props.videoContent}>{props.videoContent}</a>
//     </div>
// }
// export const VideoDescription = (props: {videoDescription: string}) => {
//     return <div>
//         📑 {props.videoDescription}
//     </div>
// }
//
// export const YoutubeVideo = (props: any) => {
//     return <div>
//         <VideoHeader xxx />
//         <VideoContent yy />
//         <VideoDescription zzz />
//     </div>
// }
//
// export const App = () => {
//     const video = {
//         title: 'Samurai way',
//         link: 'https://www.youtube.com/watch?v=gb7gMluAeao&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8',
//         description: 'Best free react-course'
//     }
//
//     return <YoutubeVideo video={video} />
// }
//
// ReactDOM.render(<App />,
//     document.getElementById('root')
// );


// type UserWalletType = {
//     title: string
//     amount: number
// }
// type UserWalletPropsType = {
//     wallet: UserWalletType
// }
//
// export const UserWallet: React.FC<UserWalletPropsType> = (props) => {
//     return <div>title: {props.wallet.title}, amount: {props.wallet.amount}</div>
// }
//
// export const UserMoney = () => {
//     const wallets = [
//         {title: 'bitcoin', amount: 1},
//         {title: '$', amount: 100}
//     ]
//
//     return <div>
//         <UserWallet wallet={xx} />
//         <UserWallet wallet={xx} />
//     </div>
// }


// type NewsType = {
//     title: string
//     author: string
// }
// type ArticleType = {
//     title: string
//     date: string
//     text: string
// }
// type PagePropsType = {
//     news: NewsType[]
//     mainArticle: ArticleType
// }
// export const Page: React.FC<PagePropsType> = (props) => {
//     return <div>
//         <article>
//             <h1>Название: {props.mainArticle.title}</h1>
//             <div>{props.mainArticle.date}</div>
//             <div>{props.mainArticle.text}</div>
//         </article>
//         <aside>Articles:
//             <ul>
//                 {props.news.map(n => <li>{n.title}, {n.author}</li>)}
//             </ul>
//         </aside>
//     </div>
// }


// type PagePropsType = {
//     age: number
//     name: string
//     avatarUrl: string
// }
// const Page: React.FC<PagePropsType> = (props) => {
//     return <User a={props.age} n={props.name} />
// }
// type UserPropsType = {
//     a: number
//     n: string
// }
// export const User: React.FC<UserPropsType> = (props) => {
//     return <div>name: {props.n}, age: {props.a}</div>
// }


// type PropsType = {
//     city: string
//     country: string
//     coords?: string
// }
// // 'belarus', 'minsk', '53.917501,27.604851'
// export const Wrapper1 = () => {
//     return <PropsComponent1 city='minsk'/>
// }
//
// export const PropsComponent1: React.FC<PropsType> = (props) => {
//     return <div>hello</div>
// }


// type UserPropsType = {
//     name: string
//     description: string
// }
// export const User: React.FC<UserPropsType> = (props) => {
//     return <div>
//         <h1>Имя: {props.name}</h1>
//         //<div>Описание: {props.description}</div>
//     </div>
// }


// export const Wrapper  = () => {
//     return <user city="minsk" />
// }
// type PropsType = {
//     city: string
// }
// export const user: React.FC<PropsType> = (props) => {
//     return <div>hello</div>
// }
//


//
//
// import ReactDOM from 'react-dom'
//
// export const YoutubeVideo = () => {
//     return <div>
//         <VideoHeader />
//         <VideoContent />
//         <VideoStatistics />
//     </div>
// }
// export const VideoHeader = () => {
//     return <div>
//         😀 Заголовок видео
//     </div>
// }
// export const VideoContent = () => {
//     return <div>
//         📼 Контент видео
//     </div>
// }
// export const VideoStatistics = () => {
//     return <div>
//         📊 Статистика лайков
//     </div>
// }
//
// ReactDOM.render(<div>{YoutubeVideo}</div>,
//     document.getElementById('root')
// );


// 12.06
// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
//
// function UsersList() {
//     const results = useState<Array>(["Bob", "Alex", "Ann"])
//     const users = results[0]
//     const setUsers = results[1]
//
//     return (
//         <p>Тут будет список пользователей</p>
//     )
// }
//
// ReactDOM.render(
//     <UsersList/>, document.getElementById('root')
//     );
//
// 2.
// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
//
// function UsersList() {
//     const [users, setUsers] = useState<Array<string>>(["Bob", "Alex", "Ann"]
//     return (
//         <p>Тут будет список пользователей!</p>
//     )
// }
//

//
// import {Button} from "./Button";
// import {useState} from "react";
// import ReactDOM from "react-dom";
// import {v1} from "uuid";
//
// const topCars = [
//     {manufacturer: 'BMW', model: 'm5cs'},
//     {manufacturer: 'Mercedes', model: 'e63s'},
//     {manufacturer: 'Audi', model: 'rs6'}
// ]
//
// type CarsTypeArray = {
//     topCars: CarsType[]
// }
// type CarsType = {
//     manufacturer: string,
//     model: string
// }
//
// type FilterTypesMoney = 'all' | 'Dollars' | 'RUBLS'
//
// const data1 = [{
//     subscriberID: 0,
//     subscriberName: 'Alex',
//     age: 23,
//     address: 'Minsk'
// }, {
//     subscriberID: 1,
//     subscriberName: 'Vasya',
//     age: 30,
//     address: 'Barcelona'
// }]
// const dataReturnFn = (user_id: number) => {
//     alert(data1[user_id].subscriberName)
// }
//
// export const NewCars = (props: CarsTypeArray) => {
//
//     let [a, setA] = useState(1)
//
//     const onClickHandler1 = () => {
//         if (a < 6) {
//             ++a
//             setA(a)
//         } else if (a === 6) {
//             setA(6)
//             alert('sorry 6 is maximum. Please click reset')
//         }
//     }
//
//     const [money, setMoney] = useState([
//         {banknotes: 'Dollars', value: 100, number: ' a1234567890'},
//         {banknotes: 'Dollars', value: 50, number: ' z1234567890'},
//         {banknotes: 'RUBLS', value: 100, number: ' w1234567890'},
//         {banknotes: 'Dollars', value: 100, number: ' e1234567890'},
//         {banknotes: 'Dollars', value: 50, number: ' c1234567890'},
//         {banknotes: 'RUBLS', value: 100, number: ' r1234567890'},
//         {banknotes: 'Dollars', value: 50, number: ' x1234567890'},
//         {banknotes: 'RUBLS', value: 50, number: ' v1234567890'},
//     ])
//     const reset = () => {
//         if (a > 1) {
//             a = 1
//             setA(a)
//         } else {
//             alert('im not in active. Please inc a > 1')
//         }
//     }
//
//     let currentMoney = money;
//     const [filter, setFilter] = useState<FilterTypesMoney>('all')
//     if (filter === 'Dollars') {
//         currentMoney = money.filter((filteredMoney) => filteredMoney.banknotes === 'Dollars');
//     } else if (filter === 'RUBLS') {
//         currentMoney = money.filter((filteredMoney) => filteredMoney.banknotes === 'RUBLS');
//     } else {
//         currentMoney = money.filter((filteredMoney) => filteredMoney.banknotes)
//     }
//     const onClickFilterHadler = (nameButton: FilterTypesMoney) => {
//         setFilter(nameButton)
//     }
//
//     return (
//         <div>
//             <div>
//                 {props.topCars.map((objectTopCars) => {
//                     return (
//                         <ul>
//                             <li key={v1()}>
//                                 <span>Manufacturer: {objectTopCars.manufacturer}</span>
//                                 {/*<button onClick={(event)=>carsName(index)}>Click to know manufacturer!</button>*/}
//                                 <Button name={'Hello'} callBack={() => dataReturnFn(data1[0].subscriberID)}/>
//                                 <Button name={'Hello1'} callBack={() => dataReturnFn(data1[1].subscriberID)}/>
//                                 <div>model: {objectTopCars.model}</div>
//                             </li>
//                         </ul>)
//                 })}
//             </div>
//             <div style={{marginLeft: '90px'}}>
//                 <h1>{a}</h1>
//                 <button onClick={onClickHandler1}>number</button>
//                 <button onClick={reset}>reset</button>
//             </div>
//             <div>
//                 <ul>
//                     {currentMoney.map((objFromMoneyArr) => {
//                         return (
//                             <li key={v1()}>
//                                 <span>  {objFromMoneyArr.banknotes}</span>
//                                 <span>  {objFromMoneyArr.value}</span>
//                                 <span>  {objFromMoneyArr.number}</span>
//                             </li>
//                         )
//                     })}
//                     <button onClick={() => onClickFilterHadler('Dollars')}>dollars</button>
//                     <button onClick={() => onClickFilterHadler('RUBLS')}>rubles</button>
//                     <button onClick={() => onClickFilterHadler('all')}>all</button>
//                 </ul>
//             </div>
//         </div>)
// }
//
//
// ReactDOM.render(
//     <NewCars topCars={topCars}/>, document.getElementById('root')
// );


// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
//
// function UsersList() {
//     const [users, setUsers] = useState<Array<string>>(["Bob", "Alex", "Ann"])
//
//     return (
//         <main>
//             <h4>User list:</h4>
//             <ul>
//                 user.map((user1 => <li>{user}</li> ))}
//             </ul>
//         </main>
//     )
// }
//
// ReactDOM.render(
//     <UsersList/>, document.getElementById('root')
// );


// Что надо вставить вместо XXX, чтобы код заработал?

// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
//
// function UsersList() {
//     const [users, setUsers] = useState<Array<string>>(["Bob", "Alex", "Ann"])
//     const getUser = (user: string) => <li>{user}</li>
//     const usersList = users.map(t=>t)
//
//     return (
//         <main>
//             <h4>User list:</h4>
//             <ul>
//                 {usersList}
//             </ul>
//         </main>
//     )
// }
//
// ReactDOM.render(
//     <UsersList/>, document.getElementById('root')
// );

// Что вернёт выражение: Array.isArray(usersList)?
//
//
// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
//
// function UsersList() {
//     const [users, setUsers] = useState<Array<string>>(["Bob", "Alex", "Ann"])
//     const getUser = (user: string) => <li>{user}</li>
//     const usersList = users.map(getUser)
//     return (
//         <main>
//             <h4>User list:</h4>
//             <ul>
//                 {usersList}
//             </ul>
//         </main>
//     )
// }
//
// ReactDOM.render(
//     <UsersList/>, document.getElementById('root')
// );
//
// Что вернёт выражение: typeof getUser?
//
//     copy
// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
//
// function UsersList() {
//     const [users, setUsers] = useState<Array<string>>(["Bob", "Alex", "Ann"])
//     const getUser = (user: string) => <li>{user}</li>
//     return (
//         <main>
//             <h4>User list:</h4>
//             <ul>
//                 {users.map(getUser)}
//             </ul>
//         </main>
//     )
// }
//
// ReactDOM.render(
//     <UsersList/>, document.getElementById('root')
// );
// // Что вернёт выражение: typeof getUser?
//
// Что надо написать вместо XXX, чтобы код работал?
//
//     copy
// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
//
// type UserType = {
//     id: number
//     name: string
//     age: number
// }
//
// function User(props: UserType) {
//     return (
//         <li>User {props.name}: {props.age} y.o.</li>
//     )
// }
//
// function UsersList() {
//     const state = [
//         {id: 1, name: "Bob", age: 34},
//         {id: 2, name: "Alex", age: 25},
//         {id: 3, name: "Ann", age: 30},
//         {id: 4, name: "John", age: 23},
//     ]
//     const users = [
//         {id: 1, userName: "Bob", age: 34},
//         {id: 2, userName: "Alex", age: 25},
//         {id: 3, userName: "Ann", age: 30},
//         {id: 4, userName: "John", age: 23},
//     ]
//
//     const [usersList, setUsersList] = useState<Array<UserType>>({
//         })
//     return (
//         <main>
//             <h5>User list:</h5>
//             <p>Тут будет список пользователей</p>
//         </main>
//     )
// }
//
// ReactDOM.render(
//     <UsersList/>, document.getElementById('root')
// );
// Что надо написать вместо XXX, чтобы код работал?


// Какой тип правильнее указать вместо "any" при типизации стэйта?
// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
//
// function UsersList() {
//     const results = useState<Array<string>>(["Bob", "Alex", "Ann"])
//     const users = results[0]
//     const setUsers = results[1]
//
//     return (
//         <p>Тут будет список пользователей</p>
//     )
// }
//
// ReactDOM.render(
//     <UsersList/>, document.getElementById('root')
// );


// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
//
// function UsersList() {
//     const [users, setUsers] = useState<Array<string>>(["Bob", "Alex", "Ann"])
//     console.log(typeof useState)
//     return (
//         <p>Тут будет список пользователей!</p>
//     )
// }
//
// ReactDOM.render(
//     <UsersList />, document.getElementById('root')
// );


// Чему равно results.length?
//
//     copy
// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
//
// function UsersList() {
//     const results = useState<Array<string>>(["Bob", "Alex", "Ann"])
//
//     const users = results[0]
//     const setUsers = results[1]
//     console.log(results.length)
//     return (
//         <p>Тут будет список пользователей</p>
//     )
// }
//
// ReactDOM.render(
//     <UsersList/>, document.getElementById('root')
// );


// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
//
// function UsersList() {
//     const [users, setUsers] = useState<Array<string>>(["Bob", "Alex", "Ann"])
//     console.log(Array.isArray(users))
//     return (
//         <p>Тут будет список пользователей</p>
//     )
// }
//
// ReactDOM.render(
//     <UsersList/>, document.getElementById('root')
// );

// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
//
// function UsersList() {
//     const [users, setUsers] = useState<Array<string>>(["Bob", "Alex", "Ann"])
//     console.log(typeof setUsers)
//     return (
//         <p>Тут будет список пользователей</p>
//     )
// }
//
// ReactDOM.render(
//     <UsersList/>, document.getElementById('root')
// );

// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
//
// function UsersList() {
//     const [users, setUsers] = useState<Array<string>>(["Bob", "Alex", "Ann"])
//
//     return (
//         <main>
//             <h4>User list:</h4>
//             <ul>
//                 { users.map(user => <li>{user}</li> )}
//             </ul>
//         </main>
//     )
// }
//
// ReactDOM.render(
//     <UsersList/>, document.getElementById('root')
// );
//
// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
//
// function UsersList() {
//     const [users, setUsers] = useState<Array<string>>(["Bob", "Alex", "Ann"])
//     const getUser = (user: string) => <li>{user}</li>
//     const usersList = users.map(user => <li>{user}</li> )
//
//     return (
//         <main>
//             <h4>User list:</h4>
//             <ul>
//                 {usersList}
//             </ul>
//         </main>
//     )
// }
//
// ReactDOM.render(
//     <UsersList/>, document.getElementById('root')
// );

// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
//
// function UsersList() {
//     const [users, setUsers] = useState<Array<string>>(["Bob", "Alex", "Ann"])
//     const getUser = (user: string) => <li>{user}</li>
//     const usersList = users.map(getUser)
//     console.log(Array.isArray(usersList))
//     return (
//         <main>
//             <h4>User list:</h4>
//             <ul>
//                 {usersList}
//             </ul>
//         </main>
//     )
// }
//
// ReactDOM.render(
//     <UsersList/>, document.getElementById('root')
// );

// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
//
// function UsersList() {
//     const [users, setUsers] = useState<Array<string>>(["Bob", "Alex", "Ann"])
//     const getUser = (user: string) => <li>{user}</li>
//     console.log(typeof getUser)
//     return (
//         <main>
//             <h4>User list:</h4>
//             <ul>
//                 {users.map(getUser)}
//             </ul>
//         </main>
//     )
// }
//
// ReactDOM.render(
//     <UsersList/>, document.getElementById('root')
// );
//
// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
//
// type UserType = {
//     id: number
//     name: string
//     age: number
// }
//
// function User(props: UserType) {
//     return (
//         <li>User {props.name}: {props.age} y.o.</li>
//     )
// }
//
// function UsersList() {
//     const state = [
//         {id: 1, name: "Bob", age: 34},
//         {id: 2, name: "Alex", age: 25},
//         {id: 3, name: "Ann", age: 30},
//         {id: 4, name: "John", age: 23},
//     ]
//     const users = [
//         {id: 1, userName: "Bob", age: 34},
//         {id: 2, userName: "Alex", age: 25},
//         {id: 3, userName: "Ann", age: 30},
//         {id: 4, userName: "John", age: 23},
//     ]
//
//     const [usersList, setUsersList] = useState<Array<UserType>>('')
//     return (
//         <main>
//             <h5>User list:</h5>
//             <p>Тут будет список пользователей</p>
//         </main>
//     )
// }
//
// ReactDOM.render(
//     <UsersList/>, document.getElementById('root')
// );


// EXAM 21.06


// Что надо написать вместо xxx, чтобы код работал оптимальней?
// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
//
// type UserType = {
//     id: number
//     name: string
//     age: number
// }
//
// function User(props: UserType) {
//     return (
//         <li>Student {props.name}: {props.age} y.o.</li>
//     )
// }
//
// function UsersList() {
//     const data: Array<UserType> = [
//         {id: 1, name: "Bob", age: 34},
//         {id: 2, name: "Alex", age: 29},
//         {id: 3, name: "Ann", age: 25},
//         {id: 4, name: "John", age: 36},
//     ]
//     const [users, setUsers] = useState<Array<UserType>>(data)
//     return (
//         <main>
//             <h4>User list:</h4>
//             <ul>
//                 {
//                     users.map(u => <User key={u.id}
//                                          id={u.id}
//                                          name={u.name}
//                                          age={u.age}
//                         />
//                     )
//                 }
//             </ul>
//         </main>
//     )
// }
//
// ReactDOM.render(
//     <UsersList/>, document.getElementById('root')
// );

//
// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
//
// type UserType = {
//     id: number
//     name: string
//     age: number
// }
//
// function User(props: UserType) {
//     return (
//         <li>Student {props.name}: {props.age} y.o.</li>
//     )
// }
//
// function UsersList() {
//     const data: Array<UserType> = [
//         {id: 1, name: "Bob", age: 34},
//         {id: 2, name: "Alex", age: 29},
//         {id: 3, name: "Ann", age: 25},
//         {id: 4, name: "John", age: 36},
//     ]
//     const [users, setUsers] = useState<Array<UserType>>(data)
//     return (
//         <main>
//             <h4>User list:</h4>
//             <ul>
//                 {users.map(u => <User key={u.id} {...} />) }
//             </ul>
//         </main>
//     )
// }
//
// ReactDOM.render(
//     <UsersList/>, document.getElementById('root')
// );


// Что надо написать вместо xxx, чтобы код работал?
//
//     copy
// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
//
// type UserType = {
//     id: number
//     name: string
//     age: number
// }
//
// function User(props: UserType) {
//     return (
//         <li>User {props.name}: {props.age} y.o.</li>
//     )
// }
//
// function UsersList() {
//     const data: Array<UserType> = [
//         {id: 1, name: "Bob", age: 25},
//         {id: 2, name: "Alex", age: 28},
//         {id: 3, name: "Ann", age: 23},
//         {id: 4, name: "John", age: 30},
//     ]
//     const [users, setUsers] = useState<Array<UserType>>(data)
//     // Пользователи старше 25 лет:
//     const olderThen25Users = users.map(u => u.age > 25)
//     return (
//         <main>
//             <h4>User list:</h4>
//             <ul>
//                 { olderThen25Users.map(u => <User key={u.id} {...u}/>)}
//             </ul>
//         </main>
//     )
// }
//
// ReactDOM.render(
//     <UsersList/>, document.getElementById('root')
// );
//
// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
//
// type UserType = {
//     id: number
//     name: string
//     age: number
// }
//
// function User(props: UserType) {
//     return (
//         <li>User {props.name}: {props.age} y.o.</li>
//     )
// }
//
// function UsersList() {
//     const data: Array<UserType> = [
//         {id: 1, name: "Bob", age: 25},
//         {id: 2, name: "Alex", age: 28},
//         {id: 3, name: "Ann", age: 23},
//         {id: 4, name: "John", age: 30},
//     ]
//     const [users, setUsers] = useState<Array<UserType>>(data)
//     // Необходимо отрендерить список пользователей старше 25 лет:
//     const getOlderThen25Users = (u: UserType) => u.age > 25
//     const olderThen25Users = users.filter(getOlderThen25Users)
//     return (
//         <main>
//             <h4>User list:</h4>
//             <ul>
//                 { olderThen25Users.map(u => <User key={u.id} {...u}/>)}
//             </ul>
//         </main>
//     )
// }
//
// ReactDOM.render(
//     <UsersList/>, document.getElementById('root')
// );
//
// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
//
// type UserType = {
//     id: number
//     name: string
//     age: number
// }
//
// function User(props: UserType) {
//     return (
//         <li>User {props.name}: {props.age} y.o.</li>
//     )
// }
//
// function UsersList() {
//     const data: Array<UserType> = [
//         {id: 1, name: "Bob", age: 25},
//         {id: 2, name: "Alex", age: 28},
//         {id: 3, name: "Ann", age: 23},
//         {id: 4, name: "John", age: 30},
//     ]
//     const [users, setUsers] = useState<Array<UserType>>(data)
//     // Необходимо отрендерить список ользователей старше 25 лет:
//     const getOlderThen25Users = (u: UserType) => u.age > 25
//     console.log(Array.isArray(olderThen25Users))
//     const olderThen25Users = users.filter(getOlderThen25Users)
//     return (
//         <main>
//             <h4>User list:</h4>
//             <ul>
//                 { olderThen25Users.map(u => <User key={u.id} {...u}/>)}
//             </ul>
//
//         </main>
//
//     )
// }
//
// ReactDOM.render(
//     <UsersList/>, document.getElementById('root')
// );


// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
//
// type UserType = {
//     id: number
//     name: string
//     age: number
// }
//
// type UserPropsType = UserType & {
//     deleteUser: (id: number) => void
// }
//
// function User(props: UserPropsType) {
//     const deleteUser = () => props.deleteUser(props.id)
//     return (
//         <li>
//             <button onClick={deleteUser}>x</button>
//             User {props.name}: {props.age} y.o.
//         </li>
//     )
// }
//
// function UsersList() {
//     const data: Array<UserType> = [
//         {id: 1, name: "Bob", age: 25},
//         {id: 2, name: "Alex", age: 28},
//         {id: 3, name: "Ann", age: 23},
//         {id: 4, name: "John", age: 30},
//     ]
//     const [users, setUsers] = useState<Array<UserType>>(data)
//     const deleteUser = (userID: number) => {
//         const filteredUsers = users.filter(u => u.id !== userID)
//         setUsers(filteredUsers)
//     }
//     return (
//         <main>
//             <h4>User list:</h4>
//             <ul>
//                 {users.map(u => <User
//                     key={u.id}
//                     {...u}
//                     deleteUser={deleteUser}
//                 />)}
//             </ul>
//         </main>
//     )
// }
//
// ReactDOM.render(
//     <UsersList/>, document.getElementById('root')
// );

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
//
// function Button() {
//     return <button
//         onClick={alert}
//     >Click</button>
// }
//
//
// ReactDOM.render(
//     <Button/>, document.getElementById('root')
// );


// import React, {MouseEvent, useCallback} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
//
// function Button() {
//     const onClickHandler = (e: MouseEvent<HTMLButtonElement>) => {
//         console.log((typeof e) === useCallback)
//     }
//     return <button onClick={onClickHandler} >Click</button>
// }
//
//
// ReactDOM.render(
//     <Button/>, document.getElementById('root')
// );


// import React, {useState, MouseEvent} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
//
// function Button() {
//     const [tagName, setTagName] = useState<string>()
//     const onClickHandler = (e: MouseEvent<HTMLButtonElement>) => {
//         setTagName(e.Button.tagName)
//     }
//     return (
//         <>
//             <p>{tagName}</p>
//             <button onClick={onClickHandler} >
//                 <span>Click</span>
//             </button>
//         </>
//     )
// }
//
// ReactDOM.render(
//     <Button/>, document.getElementById('root')
// );

//
// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
//
// type UserType = {
//     id: number
//     name: string
//     age: number
// }
//
// type UserPropsType = UserType & {
//     deleteUser: (id: number) => void
// }
//
// function User(props: UserPropsType) {
//     return (
//         <li>
//             <button onClick={()=>props.deleteUser(props.id)}>x</button>
//             User {props.name}: {props.age} y.o.
//         </li>
//     )
// }
//
// function UsersList() {
//     const data: Array<UserType> = [
//         {id: 1, name: "Bob", age: 25},
//         {id: 2, name: "Alex", age: 28},
//         {id: 3, name: "Ann", age: 23},
//         {id: 4, name: "John", age: 30},
//     ]
//     const [users, setUsers] = useState<Array<UserType>>(data)
//     const deleteUser = (userID: number) => {
//         setUsers(users.filter(u => u.id !== userID))
//     }
//     return (
//         <main>
//             <h4>Users list:</h4>
//             <ul>
//                 {users.map(u => <User key={u.id} {...u}
//                     deleteUser={deleteUser}
//                 />)}
//             </ul>
//         </main>
//     )
// }
//
// ReactDOM.render(
//     <UsersList/>, document.getElementById('root')
// );


// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
//
// type UserType = {
//     id: number
//     name: string
//     age: number
// }
//
// type UserPropsType = UserType & {
//     deleteUser: (id: number) => void
// }
//
// function User(props: UserPropsType) {
//     return (
//         <li>
//             <button onClick={() => props.deleteUser(props.id)}>x</button>
//             User {props.name}: {props.age} y.o.
//         </li>
//     )
// }
//
// function UsersList() {
//     const data: Array<UserType> = [
//         {id: 1, name: "Bob", age: 25},
//         {id: 2, name: "Alex", age: 28},
//         {id: 3, name: "Ann", age: 23},
//         {id: 4, name: "John", age: 30},
//     ]
//     const [users, setUsers] = useState<Array<UserType>>(data)
//     const deleteUser = (userID: number) => {
//         const filteredUsers = users.filter(u => u.id !== userID)
//         setUsers(filteredUsers)
//     }
//     return (
//         <main>
//             <h4>User list:</h4>
//             <ul>
//                 {users.map(u => <User
//                     key={u.id}
//                     {...u}
//                     deleteUser={deleteUser}
//                 />)}
//             </ul>
//         </main>
//     )
// }
//
// ReactDOM.render(
//     <UsersList/>, document.getElementById('root')
// );


// EXAM!!!!4!!
//
// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
//
// type UserType = {
//     id: number
//     name: string
//     age: number
// }
//
// type UserPropsType = UserType & {
//     deleteUser: (id: number) => void
// }
//
// function User(props: UserPropsType) {
//     const deleteUser = () => props.deleteUser(props.id)
//     return (
//         <li>
//             <button onClick={deleteUser}>Delete</button>
//             User {props.name}: {props.age} y.o.
//         </li>
//     )
// }
//
// function UsersList() {
//     const data: Array<UserType> = [
//         {id: 1, name: "Bob", age: 25},
//         {id: 2, name: "Alex", age: 28},
//         {id: 3, name: "Ann", age: 23},
//         {id: 4, name: "John", age: 30},
//     ]
//     const [users, setUsers] = useState<Array<UserType>>(data)
//     const deleteUser = (userID: number) => {
//         const updatedUsers = users.filter(u => u.id !== userID)
//         setUsers(updatedUsers)
//     }
//     return (
//         <main>
//             <h4>User list:</h4>
//             <ul>
//                 {users.map(u => <User
//                     key={u.id}
//                     {...u}
//                     deleteUser={deleteUser}
//                 />)}
//             </ul>
//         </main>
//     )
// }
//
// ReactDOM.render(
//     <UsersList/>, document.getElementById('root')
// );


// import React, {useState, MouseEvent} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
//
// function Post() {
//     const onClickHandler = (e: MouseEvent<HTMLAnchorElement>) => {
//         // xxx
//         alert("Летим-бомбим!!!")
//     }
//     return (
//         <div>
//             <article>
//                 <h4>Как дела, братан?</h4>
//                 <p>
//                     Вижу, что неплохо. Давай, трудись )))
//                     Google ждёт тебя в цифровом рабстве!
//                     Cтавь лайк и полетели!!!
//                 </p>
//                 <a href={"https://www.youtube.com/"}
//                    onClick={onClickHandler}
//                 >В этом месте подробнее...</a>
//             </article>
//         </div>
//     )
// }
//
// ReactDOM.render(
//     <Post/>, document.getElementById('root')
// );


// import React, {useState, MouseEvent} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
//
// function AuthForm() {
//     const onClickHandler = (e: MouseEvent<HTMLButtonElement>) => {
//         // xxx
//         alert()
//     }
//     return (
//         <form>
//             <div>
//                 <label style={{padding: "10px 0"}}>
//                     Name:
//                     <input type={"email"} name={"email"}/>
//                 </label>
//             </div>
//             <div>
//                 <label style={{padding: "10px 0"}}>
//                     Password:
//                     <input type={"password"} name={"password"}/>
//                 </label>
//             </div>
//             <button
//                 onClick={onClickHandler}
//                 type={"submit"}>
//                 Log in
//             </button>
//         </form>
//     )
// }
//
// ReactDOM.render(
//     <AuthForm/>, document.getElementById('root')
// );

//
// import React, {useState, MouseEvent, ChangeEvent} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
//
// function User() {
//     const [userName, setUserName] = useState<string>("")
//     const onChangeHandler = (e: ChangeEvent)=> setUserName(e.currentTarget.value)
//     return (
//         <div>
//             <p>{userName}</p>
//             <input
//                 onChange={onChangeHandler}
//             />
//         </div>
//     )
// }
//
// ReactDOM.render(
//     <User/>, document.getElementById('root')
// );


// import React, {useState, MouseEvent, ChangeEvent} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
//
// function User() {
//     const [userName, setUserName] = useState<string>("")
//     return (
//         <div>
//             <p>{userName}</p>
//             <input
//                 // xxx
//                 onChange={(e) => setUserName(e.currentTarget.value)}
//             />
//         </div>
//     )
// }
//
// ReactDOM.render(
//     <User/>, document.getElementById('root')
// );

// import React, {useState, MouseEvent, ChangeEvent} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
//
// function User() {
//     const [userName, setUserName] = useState<string>("")
//     const [text, setText] = useState<string>("")
//     const onChangeHandler = (e: ChangeEvent<HTMLInputElement> )=> setUserName(e.currentTarget.value)
//     return (
//         <div>
//             <input
//                 value={userName}
//                 onChange={onChangeHandler}
//                 onBlur={()=> {
//                     setText("")
//                     setText(userName)
//                 }}
//             />
//             <p>{text}</p>
//         </div>
//     )
// }
//
// ReactDOM.render(
//     <User/>, document.getElementById('root')
// );

// import React, {useState, MouseEvent, ChangeEvent} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
//
// function Notes() {
//     const [newNote, setNewNote] = useState<string>("")
//     const [notes, setNotes] = useState<Array<string>>([])
//     const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement> )=>
//         setNewNote(e.currentTarget.value)
//     const addNote = () => {
//         setNotes([newNote, ...notes])
//         setNewNote("")
//     }
//     return (
//         <div>
//             <textarea
//                 value={newNote}
//                 onChange={onChangeHandler}
//                 focus = {addNote}
//             />
//             <h4>Notes:</h4>
//             <div>
//                 {notes.map((n,i )=> <p key={i}>{n}</p>)}
//             </div>
//         </div>
//     )
// }
//
//
// ReactDOM.render(
//     <Notes/>, document.getElementById('root')
// );


// import React, {useState, MouseEvent, ChangeEvent} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
//
// function Notes() {
//     const [newNote, setNewNote] = useState<string>("")
//     const [notes, setNotes] = useState<Array<string>>([])
//     const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement> )=>
//         setNewNote(e.currentTarget.value)
//     const addNote = () => {
//         setNotes([newNote, ...notes])
//         setNewNote("")
//     }
//     return (
//         <div>
//             <textarea
//                 value={newNote}
//                 onChange={onChangeHandler}
//                 onBlur={addNote}
//             />
//             <div>
//                 <button
//                     onClick={onChangeHandler}
//                 >Clear notes list</button>
//             </div>
//             <h4>Notes:</h4>
//             <div>
//                 {notes.map(n => <p>{n}</p>)}
//             </div>
//         </div>
//     )
// }
//

//
// export const Wrapper  = () => {
//     return <User city="minsk" />
// }
// type PropsType = {
//     city: string
// }
// export const User: React.FC<PropsType> = (props: PropsType) => {
//     return <div>hello</div>
// }
//
// ReactDOM.render(
//     <User city={c}/>, document.getElementById('root')
// );

// import ReactDOM from 'react-dom'
//
// export const YoutubeVideo = () => {
//     return <div>
//         <VideoHeader />
//         <VideoContent />
//         <VideoStatistics />
//     </div>
// }
// export const VideoHeader = () => {
//     return <div>
//         😀 Заголовок видео
//     </div>
// }
// export const VideoContent = () => {
//     return <div>
//         📼 Контент видео
//     </div>
// }
// export const VideoStatistics = () => {
//     return <div>
//         📊 Статистика лайков
//     </div>
// }
//
// ReactDOM.render(<div><YoutubeVideo/></div>,
//     document.getElementById('root')
// );

//
// type UserPropsType = {
//     name: string
//     description: string
// }
// export const User: React.FC<UserPropsType> = (props) => {
//     return <div>
//         <h1>Имя: {props.name}</h1>
//         //<div>Описание: {props.description}</div>
//     </div>
// }


// type PropsType = {
//     city: string
//     country: string
//     coords?: string
// }
// // 'belarus', 'minsk', '53.917501,27.604851'
// export const Wrapper1 = () => {
//     return <PropsComponent1 city='minsk' country={''}/>
// }
//
// export const PropsComponent1: React.FC<PropsType> = (props) => {
//     return <div>hello</div>
// }




// type PagePropsType = {
//     age: number
//     name: string
//     avatarUrl: string
// }
// const Page: React.FC<PagePropsType> = (props) => {
//     return <User a={props.age} n={props.name} />
// }
// type UserPropsType = {
//     a: number
//     n: string
// }
// export const User: React.FC<UserPropsType> = (props) => {
//     return <div>name: {props.n}, age: {props.a}</div>
// }
//
// type NewsType = {
//     title: string
//     author: string
// }
// type ArticleType = {
//     title: string
//     date: string
//     text: string
// }
// type PagePropsType = {
//     news: NewsType[]
//     mainArticle: ArticleType
// }
// export const Page: React.FC<PagePropsType> = (props) => {
//     return <div>
//         <article>
//             <h1>Название: {props.mainArticle.title}</h1>
//             <div>{props.mainArticle.date}</div>
//             <div>{props.mainArticle.text}</div>
//         </article>
//         <aside>Articles:
//             <ul>
//                 {props.news.map(n => <li>{n.title}, {n.author}</li>)}
//             </ul>
//         </aside>
//     </div>
// }



// type UserWalletType = {
//     title: string
//     amount: number
// }
// type UserWalletPropsType = {
//     wallet: UserWalletType
// }
//
// export const UserWallet: React.FC<UserWalletPropsType> = (props) => {
//     return <div>title: {props.wallet.title}, amount: {props.wallet.amount}</div>
// }
//
// export const UserMoney = () => {
//     const wallets = [
//         {title: 'bitcoin', amount: 1},
//         {title: '$', amount: 100}
//     ]
//
//     return <div>
//         <UserWallet wallet={wallets[0]} />
//         <UserWallet wallet={wallets[1]} />
//     </div>
// }

//
// import ReactDOM from 'react-dom'
//
// export const VideoHeader = (props: {videoName: string}) => {
//     return <div>
//         😀 {props.videoName}
//     </div>
// }
// export const VideoContent = (props: {videoContent: string}) => {
//     return <div>
//         📼 <a href={props.videoContent}>{props.videoContent}</a>
//     </div>
// }
// export const VideoDescription = (props: {videoDescription: string}) => {
//     return <div>
//         📑 {props.videoDescription}
//     </div>
// }
//
// export const YoutubeVideo = (props: any) => {
//     return <div>
//         <VideoHeader  videoName={props.video.title} />
//         <VideoContent videoContent={props.video.link} />
//         <VideoDescription videoDescription={props.video.description} />
//     </div>
// }
//
// export const App = () => {
//     const video = {
//         title: 'Samurai way',
//         link: 'https://www.youtube.com/watch?v=gb7gMluAeao&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8',
//         description: 'Best free react-course'
//     }
//
//     return <YoutubeVideo video={video} />
// }
//
// ReactDOM.render(<App />,
//     document.getElementById('root')
// );


// import ReactDOM from 'react-dom'
//
// const CrazyButton = (props: any) => {
//
//     const style = {
//         color: props.fontColor,
//         backgroundColor: props.bgColor
//     }
//
//     return <button style={style}>
//         {props.title}
//     </button>
// }
//
// export const App = () => {
//     return <div>
//         <CrazyButton title={'delete'} fontColor={'white'} bgColor={'red'}/>
//         <CrazyButton title={'add'} fontColor={'white'} bgColor={'green'}/>
//     </div>
// }
//
// ReactDOM.render(<App/>,
//     document.getElementById('root')
// )

//
// import ReactDOM from 'react-dom'
//
// const Son = (props: any) => {
//     return <div>
//         I am son. My name is {props.name}
//     </div>
// }
//
//
// const Father = (props: any) => {
//     return <div>
//         I am father. My name is {props.name}
//         <Son name={props.sonName} />
//     </div>
// }
//
// const Granny = (props: any) => {
//     return <div>
//         I am granny. My name is {props.name}
//         <Father name={props.fatherName} sonName={props.sonName} />
//     </div>
// }
//
// export const App = () => {
//     return <div>
//         <Granny name={'Бабуля'} fatherName={'Батя'} sonName={'Сын'}/>
//     </div>
// }
//
// ReactDOM.render(<App/>,
//     document.getElementById('root')
// )

// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
//
// type UserType = {
//     id: number
//     name: string
//     age: number
// }
//
// type UserPropsType = UserType & {
//     deleteUser: (id: number) => void
// }
//
// function User(props: UserPropsType) {
//     return (
//         <li>
//             <button onClick={() => props.deleteUser(props.id)}>x</button>
//             User {props.name}: {props.age} y.o.
//         </li>
//     )
// }
//
// function UsersList() {
//     const data: Array<UserType> = [
//         {id: 1, name: "Bob", age: 25},
//         {id: 2, name: "Alex", age: 28},
//         {id: 3, name: "Ann", age: 23},
//         {id: 4, name: "John", age: 30},
//     ]
//     const [users, setUsers] = useState<Array<UserType>>(data)
//     const deleteUser = (userID: number) => {
//         const filteredUsers = users.filter(u => u.id !== userID)
//         setUsers(filteredUsers)
//     }
//     return (
//         <main>
//             <h4>User list:</h4>
//             <ul>
//                 {users.map(u => <User
//                     key={u.id}
//                     {...u}
//                     deleteUser={deleteUser}
//                 />)}
//             </ul>
//         </main>
//     )
// }
//
// ReactDOM.render(
//     <UsersList/>, document.getElementById('root')
// );


// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
//
// type UserType = {
//     id: number
//     name: string
//     age: number
// }
//
// type UserPropsType = UserType & {
//     deleteUser: (id: number) => void
// }
//
// function User(props: UserPropsType) {
//     const deleteUser = () => props.deleteUser(props.id)
//     return (
//         <li>
//             <button onClick={deleteUser}>Delete</button>
//             User {props.name}: {props.age} y.o.
//         </li>
//     )
// }
//
// function UsersList() {
//     const data: Array<UserType> = [
//         {id: 1, name: "Bob", age: 25},
//         {id: 2, name: "Alex", age: 28},
//         {id: 3, name: "Ann", age: 23},
//         {id: 4, name: "John", age: 30},
//     ]
//     const [users, setUsers] = useState<Array<UserType>>(data)
//     const deleteUser = (userID: number) => {
//         const updatedUsers = users.filter(u => u.id !== userID)
//         setUsers(updatedUsers)
//     }
//     return (
//         <main>
//             <h4>User list:</h4>
//             <ul>
//                 {users.map(u => <User
//                     key={u.id}
//                     {...u}
//                     deleteUser={deleteUser}
//                 />)}
//             </ul>
//         </main>
//     )
// }
//
// ReactDOM.render(
//     <UsersList/>, document.getElementById('root')
// );

// import React, {useState, MouseEvent} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
//
// function Post() {
//     const onClickHandler = (e: MouseEvent<HTMLAnchorElement>) => {
//
//         alert("Летим-бомбим!!!")
//     }
//     return (
//         <div>
//             <article>
//                 <h4>Как дела, братан?</h4>
//                 <p>
//                     Вижу, что неплохо. Давай, трудись )))
//                     Google ждёт тебя в цифровом рабстве!
//                     Cтавь лайк и полетели!!!
//                 </p>
//                 <a href={"https://www.youtube.com/"}
//                    onClick={onClickHandler}
//                 >В этом месте подробнее...</a>
//             </article>
//         </div>
//     )
// }
//
// ReactDOM.render(
//     <Post/>, document.getElementById('root')
// );



// import React, {useState, MouseEvent} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
//
// function AuthForm() {
//     const onClickHandler = (e: MouseEvent<HTMLButtonElement>) => {
//         // e.preventDefault()
//         alert()
//     }
//     return (
//         <form>
//             <div>
//                 <label style={{padding: "10px 0"}}>
//                     Name:
//                     <input type={"email"} name={"email"}/>
//                 </label>
//             </div>
//             <div>
//                 <label style={{padding: "10px 0"}}>
//                     Password:
//                     <input type={"password"} name={"password"}/>
//                 </label>
//             </div>
//             <button
//                 onClick={onClickHandler}
//                 type={"submit"}>
//                 Log in
//             </button>
//         </form>
//     )
// }
//
// ReactDOM.render(
//     <AuthForm/>, document.getElementById('root')
// );



// import React, {useState, MouseEvent, ChangeEvent, ChangeEventHandler} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
//
// function User() {
//     const [userName, setUserName] = useState<string>("")
//     const onChangeHandler = (e: string)=> setUserName(e.currentTarget.value)
//     return (
//         <div>
//             <p>{userName}</p>
//             <input
//                 onChange={onChangeHandler}
//             />
//         </div>
//     )
// }
//
// ReactDOM.render(
//     <User/>, document.getElementById('root')
// );


// import React, {useState, MouseEvent, ChangeEvent} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
//
// function User() {
//     const [userName, setUserName] = useState<string>("")
//     return (
//         <div>
//             <p>{userName}</p>
//             <input
//                 value={userName}
//                 onChange={(e) => setUserName(e.currentTarget.value)}
//             />
//         </div>
//     )
// }
//
// ReactDOM.render(
//     <User/>, document.getElementById('root')
// );


// import React, {useState, MouseEvent, ChangeEvent} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
//
// function User() {
//     const [userName, setUserName] = useState<string>("")
//     const [text, setText] = useState<string>("")
//     const onChangeHandler = (e: ChangeEvent<HTMLInputElement> )=> setUserName(e.currentTarget.value)
//     return (
//         <div>
//             <input
//                 value={userName}
//                 onChange={onChangeHandler}
//                 onBlur={()=> {
//                     setUserName('')
//                     setText(userName)
//                 }}
//             />
//             <p>{text}</p>
//         </div>
//     )
// }
//
// ReactDOM.render(
//     <User/>, document.getElementById('root')
// );
//
// import React, {useState, MouseEvent, ChangeEvent} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
//
// function Notes() {
//     const [newNote, setNewNote] = useState<string>("")
//     const [notes, setNotes] = useState<Array<string>>([])
//     const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement> )=>
//         setNewNote(e.currentTarget.value)
//     const addNote = () => {
//         setNotes([newNote, ...notes])
//         setNewNote("")
//     }
//     return (
//         <div>
//             <textarea
//                 value={newNote}
//                 onChange={onChangeHandler}
//                 i = {addNote}
//             />
//             <h4>Notes:</h4>
//             <div>
//                 {notes.map((n,i )=> <p key={i}>{n}</p>)}
//             </div>
//         </div>
//     )
// }
//
//
// ReactDOM.render(
//     <Notes/>, document.getElementById('root')
// );

//
// import React, {useState, MouseEvent, ChangeEvent} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
//
// function Notes() {
//     const [newNote, setNewNote] = useState<string>("")
//     const [notes, setNotes] = useState<Array<string>>([])
//     const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement> )=>
//         setNewNote(e.currentTarget.value)
//     const addNote = () => {
//         setNotes([newNote, ...notes])
//         setNewNote("")
//     }
//     return (
//         <div>
//             <textarea
//                 value={newNote}
//                 onChange={onChangeHandler}
//                 onBlur={addNote}
//             />
//             <div>
//                 <button
//                     onClick={()=>setNotes()}
//                 >Clear notes list</button>
//             </div>
//             <h4>Notes:</h4>
//             <div>
//                 {notes.map(n => <p>{n}</p>)}
//             </div>
//         </div>
//     )
// }
//
// ReactDOM.render(
//     <Notes/>, document.getElementById('root')
// );

// type UserPropsType = {
//     name: string
//     description: string
// }
// export const User: React.FC<UserPropsType> = (props) => {
//     return <div>
//         <h1>Имя: {props.name}</h1>
//         //<div>Описание: {props.description}</div>
//     </div>
// }


// type PagePropsType = {
//     age: number
//     name: string
//     avatarUrl: string
// }
// const Page: React.FC<PagePropsType> = (props) => {
//     return <User a={props.age} n={props.name} />
// }
// type UserPropsType = {
//     a: number
//     n: string
// }
// export const User: React.FC<UserPropsType> = (props) => {
//     return <div>name: {props.n}, age: {props.a}</div>
// }

// type UserWalletType = {
//     title: string
//     amount: number
// }
// type UserWalletPropsType = {
//     wallet: UserWalletType
// }
//
// export const UserWallet: React.FC<UserWalletPropsType> = (props) => {
//     return <div>title: {props.wallet.title}, amount: {props.wallet.amount}</div>
// }
//
// export const UserMoney = () => {
//     const wallets = [
//         {title: 'bitcoin', amount: 1},
//         {title: '$', amount: 100}
//     ]
//
//     return <div>
//         <UserWallet wallet={wallets[0]} />
//         <UserWallet wallet={wallets[1]} />
//     </div>
// }




// import ReactDOM from 'react-dom'
//
// const Son = (props: any) => {
//     return <div>
//         I am son. My name is {props.name}
//     </div>
// }
//
//
// const Father = (props: any) => {
//     return <div>
//         I am father. My name is {props.name}
//         <Son name={props.sonName} />
//     </div>
// }
//
// const Granny = (props: any) => {
//     return <div>
//         I am granny. My name is {props.name}
//         <Father name={props.fatherName} sonName={props.sonName} />
//     </div>
// }
//
// export const App = () => {
//     return <div>
//         <Granny name={'Бабуля'} fatherName={'Батя'} sonName={'Сын'}/>
//     </div>
// }
//
// ReactDOM.render(<App/>,
//     document.getElementById('root')
// )


// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
//
// function UsersList() {
//     const results = useState<Array<string>>(["Bob", "Alex", "Ann"])
//
//     const users = results[0]
//     const setUsers = results[1]
//     console.log(results.length)
//     return (
//         <p>Тут будет список пользователей</p>
//     )
// }
//
// ReactDOM.render(
//     <UsersList/>, document.getElementById('root')
// );

// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
//
// function UsersList() {
//     const [users, setUsers] = useState<Array<string>>(["Bob", "Alex", "Ann"])
//     return (
//         <p>Тут будет список пользователей</p>
//     )
// }
//
// ReactDOM.render(
//     <UsersList/>, document.getElementById('root')
// );
//
// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
//
// type UserType = {
//     id: number
//     name: string
//     age: number
// }
//
// function User(props: UserType) {
//     return (
//         <li>User {props.name}: {props.age} y.o.</li>
//     )
// }
//
// function UsersList() {
//     const state = [
//         {id: 1, name: "Bob", age: 34},
//         {id: 2, name: "Alex", age: 25},
//         {id: 3, name: "Ann", age: 30},
//         {id: 4, name: "John", age: 23},
//     ]
//     const users = [
//         {id: 1, userName: "Bob", age: 34},
//         {id: 2, userName: "Alex", age: 25},
//         {id: 3, userName: "Ann", age: 30},
//         {id: 4, userName: "John", age: 23},
//     ]
//
//     const [usersList, setUsersList] = useState<Array<UserType>>((state + users))
//     return (
//         <main>
//             <h5>User list:</h5>
//             <p>Тут будет список пользователей</p>
//         </main>
//     )
// }
//
// ReactDOM.render(
//     <UsersList/>, document.getElementById('root')
// );

// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
//
// type UserType = {
//     id: number
//     name: string
//     age: number
// }
//
// function User(props: UserType) {
//     return (
//         <li>User {props.name}: {props.age} y.o.</li>
//     )
// }
//
// function UsersList() {
//     const data: Array<UserType> = [
//         {id: 1, name: "Bob", age: 25},
//         {id: 2, name: "Alex", age: 28},
//         {id: 3, name: "Ann", age: 23},
//         {id: 4, name: "John", age: 30},
//     ]
//     const [users, setUsers] = useState<Array<UserType>>(data)
//     // Пользователи старше 25 лет:
//     const olderThen25Users = users.filter(u => u.age > 2)
//     return (
//         <main>
//             <h4>User list:</h4>
//             <ul>
//                 { olderThen25Users.map(u => <User key={u.id} {...u}/>)}
//             </ul>
//         </main>
//     )
// }
//
// ReactDOM.render(
//     <UsersList/>, document.getElementById('root')
// );


// import React, {MouseEvent} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
//
// function Button() {
//     const onClickHandler = (e: MouseEvent<HTMLButtonElement>) => {
//         console.log((typeof e) === 'object')
//     }
//     return <button onClick={onClickHandler} >Click</button>
// }
//
//
// ReactDOM.render(
//     <Button/>, document.getElementById('root')
// );

// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
//
// type UserType = {
//     id: number
//     name: string
//     age: number
// }
//
// type UserPropsType = UserType & {
//     deleteUser: (id: number) => void
// }
//
// function User(props: UserPropsType) {
//     return (
//         <li>
//             <button onClick={() => props.deleteUser(props.id)}>x</button>
//             User {props.name}: {props.age} y.o.
//         </li>
//     )
// }
//
// function UsersList() {
//     const data: Array<UserType> = [
//         {id: 1, name: "Bob", age: 25},
//         {id: 2, name: "Alex", age: 28},
//         {id: 3, name: "Ann", age: 23},
//         {id: 4, name: "John", age: 30},
//     ]
//     const [users, setUsers] = useState<Array<UserType>>(data)
//     const deleteUser = (userID: number) => {
//         const filteredUsers = users.filter(u => u.id !== userID)
//         setUsers(filteredUsers)
//     }
//     return (
//         <main>
//             <h4>User list:</h4>
//             <ul>
//                 {users.map(u => <User
//                     key={u.id}
//                     {...u}
//                     deleteUser={deleteUser}
//                 />)}
//             </ul>
//         </main>
//     )
// }
//
// ReactDOM.render(
//     <UsersList/>, document.getElementById('root')
// );


// import React, {useState, MouseEvent, ChangeEvent} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
//
// function User() {
//     const [userName, setUserName] = useState<string>("")
//     return (
//         <div>
//             <p>{userName}</p>
//             <input
//                 value={userName}
//                 onChange={(e) => setUserName(e.currentTarget.value)}
//             />
//         </div>
//     )
// }
//
// ReactDOM.render(
//     <User/>, document.getElementById('root')
// );
//
// import React, {useState, MouseEvent, ChangeEvent} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
//
// function Notes() {
//     const [newNote, setNewNote] = useState<string>("")
//     const [notes, setNotes] = useState<Array<string>>([])
//     const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement> )=>
//         setNewNote(e.currentTarget.value)
//     const addNote = () => {
//         setNotes([newNote, ...notes])
//         setNewNote("")
//     }
//     return (
//         <div>
//             <textarea
//                 value={newNote}
//                 onChange={onChangeHandler}
//                 onBlur={addNote}
//             />
//             <div>
//                 <button
//                     onClick={()=>setNotes([])}
//                 >Clear notes list</button>
//             </div>
//             <h4>Notes:</h4>
//             <div>
//                 {notes.map(n => <p>{n}</p>)}
//             </div>
//         </div>
//     )
// }
//
// ReactDOM.render(
//     <Notes/>, document.getElementById('root')
// );




//
// import React, {useState, ChangeEvent} from "react";
// import ReactDOM from "react-dom";
// import {FullInput} from "./Components";
// import {ReactComponent} from "*.svg";
// import {Button} from "./Button";
// import {Input1} from "./Input1";
//
// function App() {
//     let [message, setMessage] = useState([
//         {messages: 'efsfefe1'},
//         {messages: 'efsfefe2'},
//         {messages: 'efsfefe3'}
//     ])
//     const addMessage = (title:string) => {
//         let newMessage = {messages: title}
//         setMessage([ newMessage, ...message])
//
//     }
//     let [title, setTitle] = useState('')
//     const callBackButtonHandler = () => {
//         addMessage(title)
//         setTitle('')
//     }
//
//     return (
//         <div style={{margin: '40px 40px 40px 40px'}} className={'App'}>
//             <div>
//                 <FullInput addMessage={addMessage}/>
//                 <Input1 setTitle={setTitle} title={title}/>
//                 <Button name={'+'} callBack={callBackButtonHandler}/>
//                 {message.map((el, index) => {
//                     return (
//                         <div key={index}>{el.messages}</div>
//                     )
//                 })}
//             </div>
//         </div>
//     )
// }

// export default App;
//
// ReactDOM.render(
//     <App/>, document.getElementById('root')
// );


// EXAM02!


// import React, {useState, MouseEvent} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
//
// function ColorButton() {
//     const [isColored, setIsColored] = useState<boolean>(false)
//     return (
//         <button
//             style={{ backgroundColor: `${ isColored === true ? "red": ""}`}}
//             onClick={()=>setIsColored(true)}
//         >
//             Меняю цвет по клику
//         </button>
//     )
// }
//
//
// ReactDOM.render(
//     <ColorButton/>, document.getElementById('root')
// );

//
// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
//
// function UsersList() {
//     const [users, setUsers] = useState<Array<string>>(["Bob", "Alex", "Ann"])
//     const getUser = (user: string, i: number) => <li key={i}>{user}</li>
//
//     const usersList = (users === 0)
//         ? <p>List is empty</p>
//         :  <ul>
//             { users.map(getUser)}
//         </ul>
//
//     return (
//         <main>
//             <button onClick={()=>setUsers([])}>Clear list</button>
//             <h4>User list:</h4>
//             {usersList}
//         </main>
//     )
// }
//
// ReactDOM.render(
//     <UsersList/>, document.getElementById('root')
// );


// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
//
// function PasswordChecker() {
//     const [password, setPassword] = useState<string>("")
//     return (
//         <main>
//             <p>Your password must have more than 8 charters!</p>
//             <input
//                 placeholder={"Enter your password"}
//                 value={password}
//                 onChange={e => setPassword(e.currentTarget.value)}
//                 type={"password"}
//             />
//             {password.length < 9 && <p style={{color: "red"}}>The password is too short!</p>}
//         </main>
//     )
// }
//
// ReactDOM.render(
//     <PasswordChecker/>, document.getElementById('root')
// );

// import React, { ChangeEvent, useState } from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
//
// function LongCommentChecker() {
//     const minSizeComment = 5
//     const [isCommentReady, setIsCommentReady] = useState<boolean>(false)
//     const [comment, setComment] = useState<string>('')
//
//     const onClickSendComment = () => {
//         if (comment.length > minSizeComment) {
//             setComment('')
//         }
//     }
//     const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
//         const newComment = e.currentTarget.value
//         if (newComment.length > minSizeComment) {
//             setIsCommentReady(true)
//         } else {
//             setIsCommentReady(false)
//         }
//         setComment(newComment)
//     }
//
//     return (
//         <main>
//             <textarea
//                 placeholder={'Your comment must have more than 5 charters'}
//                 value={comment}
//                 onChange={onChangeHandler}
//             />
//             <div>
//                 <button
//                     disabled={!setIsCommentReady(true)}
//                     onClick={onClickSendComment}>
//                     Send comment
//                 </button>
//             </div>
//         </main>
//     )
// }
//
// ReactDOM.render(<LongCommentChecker/>, document.getElementById('root'));
//

//
// import React, {ChangeEvent, useState} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
//
// function Colorize() {
//
//     const [color, setColor] = useState<string>("black")
//     const colors = ["red", "yellow", "green", "blue", "violet", "chartreuse"]
//
//     const styles = {
//         width: "100px",
//         height: "100px",
//         borderRadius: "50%",
//         backgroundColor: "black"
//     }
//
//     const getColor = (colors: string[]) => {
//         const nextColor = colors[Math.floor(Math.random() * colors.length)]
//         return nextColor
//     }
//
//     return (
//         <main>
//             <div style={{...styles, backgroundColor: color}}/>
//             <div>
//                 <button
//                     onClick={() => setColor({colors}}
//                 >
//                     Get random color
//                 </button>
//             </div>
//         </main>
//     )
// }
//
// ReactDOM.render(
//     <Colorize/>, document.getElementById('root')
// );

//
//
// import React, { ChangeEvent, useState } from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
//
// type UserType = {
//     id: number
//     name: string
//     personalData: PersonalDataType
// }
// type PersonalDataType = {
//     gender: string
//     age: number
//     technologies: Array<TechnologiesType>
// }
// type TechnologiesType = 'HTML' | 'CSS' | 'React' | 'JS/TS' | 'Redux'
//
// function UsersList() {
//
//     const [users, setUsers] = useState<Array<UserType>>([
//         {
//             id: 1,
//             name: 'Bob',
//             personalData: {
//                 gender: 'male',
//                 age: 23,
//                 technologies: ['HTML', 'CSS', 'React', 'JS/TS', 'Redux']
//             }
//         },
//         {
//             id: 2,
//             name: 'Alex',
//             personalData: {
//                 gender: 'male',
//                 age: 21,
//                 technologies: ['HTML', 'CSS', 'React']
//             }
//         },
//         {
//             id: 3,
//             name: 'Ann',
//             personalData: {
//                 gender: 'female',
//                 age: 26,
//                 technologies: ['HTML', 'CSS', 'JS/TS']
//             }
//         },
//         {
//             id: 4,
//             name: 'Helen',
//             personalData: {
//                 gender: 'female',
//                 age: 31,
//                 technologies: ['HTML', 'CSS']
//             }
//         },
//         {
//             id: 5,
//             name: 'Donald',
//             personalData: {
//                 gender: 'male',
//                 age: 28,
//                 technologies: ['React', 'JS/TS', 'Redux']
//             }
//         },
//     ])
//
//
//     return <ul>
//         {users.map(u => {
//             return (
//                 u.personalData.technologies.length >= 5
//                     ? <li key={u.id}>
//                         {`User ${u.name}. ${u.personalData.age}. Ready to work.`}
//                     </li>
//                     : <li key={u.id}>
//                         {`User ${u.name}. ${u.personalData.age}. `}
//                     </li>)
//         })}
//     </ul>
// }
//
// ReactDOM.render(
//     <UsersList/>, document.getElementById('root')
// );

//
// type Student = {
//     id: number
//     name: string
// }
// type Students = Array<Student>
// type Friends = {
//     [key: string]: Array<string>
// }
//
// export const students: Students = [
//     {id: 1, name: "Bob"},
//     {id: 2, name: "Alex"},
//     {id: 3, name: "Ann"},
//     {id: 4, name: "Charley"},
// ]
//
// export const friends: Friends = {
//     1: ["Oliver", "Jack", "Oscar",],
//     2: ["Jack", "Lewis", "Thomas",],
//     3: ["William", "Michael", "Lewis",],
//     4: ["Oscar", "James", "William",],
// }

// type StudentType = {
//     id: number
//     name: string
// }
// type Students = Array<StudentType>
// type Friends = {
//     [key: string]: Array<string>
// }
//
// export const students: Students = [
//     {id: 1, name: "Bob"},
//     {id: 2, name: "Alex"},
//     {id: 3, name: "Ann"},
//     {id: 4, name: "Charley"},
// ]
//
// export const friends: Friends = {
//     1: ["Oliver", "Jack", "Oscar",],
//     2: ["Jack", "Lewis", "Thomas",],
//     3: ["William", "Michael", "Lewis",],
//     4: ["Oscar", "James", "William",],
// }


// type StudentType = {
//     id: number
//     name: string
//     age: number
// }
//
// type FriendsType = {
//     [key: string]: Array<string>
// }
//
//
// export const students: Array<StudentType> = [
//     {id: 1, name: "Bob", age: 34},
//     {id: 2, name: "Alex", age: 23},
//     {id: 3, name: "Ann", age: 25},
//     {id: 4, name: "Charley", age: 20},
// ]
//
// export const friends: FriendsType = {
//     1: ["Jack","Oliver", "Oscar",],
//     2: ["Jack", "Lewis", "Thomas",],
//     3: ["William",  "Lewis","Michael"],
//     4: ["Oscar", "Thomas", "William",],
// }
//
// type StudentType = {
//     id: number
//     name: string
// }
//
// type FriendsType = {
//     [key: string]: Array<string>
// }
//
// export const students: Array<StudentType> = [
//     {id: 1, name: "Bob"},
//     {id: 2, name: "Alex"},
//     {id: 3, name: "Ann"},
//     {id: 4, name: "Charley"},
// ]
//
// export const friends: FriendsType = {
//     1: ["Oliver", "Jack", "Oscar",],
//     2: ["Jack", "Lewis", "Thomas",],
//     3: ["William", "Michael", "Lewis",],
//     4: ["Oscar", "James", "William",],
// }


// type StudentType = {
//     id: number
//     name: string
// }
//
// type FriendsType = {
//     [key: string]: Array<string>
// }
//
// export const students: Array<StudentType> = [
//     {id: 1, name: "Bob"},
//     {id: 2, name: "Alex"},
//     {id: 3, name: "Ann"},
//     {id: 4, name: "Charley"},
// ]
//
// export const friends: FriendsType = {
//     1: ["Oliver", "Jack", "Oscar",],
//     2: ["Jack", "Lewis", "Thomas",],
//     3: ["William", "Michael", "Lewis",],
//     4: ["Oscar", "James", "William",],
// }
//
// console.log(friends[students[1].id][2])

//
// type StudentType = {
//     id: number
//     name: string
// }
//
// type FriendsType = {
//     [key: string]: Array<String>
// }
//
// export const students: Array<StudentType> = [
//     {id: 1, name: "Bob"},
//     {id: 2, name: "Alex"},
//     {id: 3, name: "Ann"},
//     {id: 4, name: "Charley"},
// ]
//
// export const friends: FriendsType = {
//     1: ["Oliver", "Jack", "Oscar",],
//     2: ["Jack", "Lewis", "Thomas",],
//     3: ["William", "Michael", "Lewis",],
//     4: ["Oscar", "James", "William",],
// }
//
//
// console.log(friends[students[0].id][3])

// import React, {useState} from "react";
//
// type samuraiType = {
//     id: string
//     name: string
//     status: "online" | "offline"
// }
// type CourseNameType = "HTML"|"JS"|"React"|"Redux"|"HomeWorks"
// type CourseType = {
//     name: CourseNameType
//     mentor: string
//     isDone: boolean
// }
// type TechnologiesType = {
//     [userID: string]: Array<CourseType>
// }
//
// const samuraiID_1 = "64jf-87kg"
// const samuraiID_2 = "90lg-34ks"
// const samuraiID_3 = "12jm-05fd"
//
// export const samurai: Array<samuraiType> = [
//     {id: samuraiID_1, name: "Bob", status: "online"},
//     {id: samuraiID_2, name: "Alex", status: "offline"},
//     {id: samuraiID_3, name: "Ann", status: "offline"},
// ]
//
// export const technologies: TechnologiesType = {
//     [samuraiID_1]: [
//         {name: "HTML", mentor: "Svetlana", isDone: true},
//         {name: "JS", mentor: "Viktor", isDone: true},
//         {name: "React", mentor: "Dmitrij", isDone: false},
//         {name: "Redux", mentor: "Valera", isDone: false},
//         {name: "HomeWorks", mentor: "Ignat", isDone: true},
//     ],
//     [samuraiID_2]: [
//         {name: "HTML", mentor: "Svetlana", isDone: true},
//         {name: "JS", mentor: "Viktor", isDone: true},
//         {name: "React", mentor: "Dmitrij", isDone: true},
//         {name: "Redux", mentor: "Valera", isDone: false},
//         {name: "HomeWorks", mentor: "Ignat", isDone: true},
//     ],
//     [samuraiID_3]: [
//         {name: "HTML", mentor: "Svetlana", isDone: true},
//         {name: "JS", mentor: "Viktor", isDone: true},
//         {name: "React", mentor: "Dmitrij", isDone: false},
//         {name: "Redux", mentor: "Valera", isDone: false},
//         {name: "HomeWorks", mentor: "Ignat", isDone: false},
//     ],
// }
//
// export const updateCourseStatus = (samuraiID: string, name: CourseNameType, isDone: boolean) => {
//     return {...technologies,
//         [samuraiID]: technologies[name.valueOf()].map(c => c.name === name ? {...c, isDone} : c)
//     }
// }


// type StudentType = {
//     id: number
//     name: string
// }
//
// type FriendsType = {
//     [key: string]: Array<string>
// }
//
// export const students: Array<StudentType> = [
//     {id: 1, name: "Bob"},
//     {id: 2, name: "Alex"},
//     {id: 3, name: "Ann"},
//     {id: 4, name: "Charley"},
// ]
//
// export const friends: FriendsType = {
//     1: ["Oliver", "Jack", "Oscar",],
//     2: ["Jack", "Lewis", "Thomas",],
//     3: ["William", "Michael", "Lewis",],
//     4: ["Oscar", "James", "William",],
// }
//
// const getMutualFriends = (st_1: StudentType, st_2: StudentType,) => {
//     const result: Array<string> = []
//     friends[st_1.id].forEach(f => friends[students.].includes(f)? result.push(f): null)
//     return result
// }

// import React, {useState} from "react";
//
// type UserType = {
//     id: number
//     name: string
//     status: "online" | "offline"
// }
//
// type AddressType = {
//     country: string
//     city: string
//     email: string
// }
//
// type AdressesType = {
//     [userID: string]: AddressType
// }
//
//
// const users: Array<UserType> = [
//     {id: 1, name: "Bob", status: "online"},
//     {id: 2, name: "Alex", status: "offline"},
//     {id: 3, name: "Ann", status: "offline"},
// ]
//
// export const addresses: AdressesType = {
//     1: {country: "Russia", city: "Moscow", email: "hey@email.com"},
//     2: {country: "Ukraine", city: "Kiev", email: "yo@send.ua"},
//     3: {country: "Belarus", city: "Minsk", email: "wow@gogo.ru"},
//
// }
//
// export const changeUserStatus = (userID: number, status: string) => {
//     return users.map(u => u.id === userID ? {...u, status} : u)
// }

// import React, {useState} from "react";
//
// type UserType = {
//     id: number
//     name: string
//     status: "online" | "offline"
// }
//
// type AddressType = {
//     country: string
//     city: string
//     email: string
// }
//
// type AdressesType = {
//     [userID: string]: AddressType
// }
//
// const users: Array<UserType> = [
//     {id: 1, name: "Bob", status: "online"},
//     {id: 2, name: "Alex", status: "offline"},
//     {id: 3, name: "Ann", status: "offline"},
// ]
//
// const addresses: AdressesType = {
//     1: {country: "Russia", city: "Moscow", email: "hey@email.com"},
//     2: {country: "Ukraine", city: "Kiev", email: "yo@send.ua"},
//     3: {country: "Belarus", city: "Minsk", email: "wow@gogo.ru"},
//
// }
//
// const updateUserAddress = (userID: number, key: string, newValue: string) => {
//     return {...addresses,
//         [userID]: {...addresses[userID], [key]: newValue}
//     }
// }
//
// import React, {useState} from "react";
//
// type samuraiType = {
//     id: string
//     name: string
//     status: "online" | "offline"
// }
// type CourseNameType = "HTML"|"JS"|"React"|"Redux"|"HomeWorks"
// type CourseType = {
//     name: CourseNameType
//     mentor: string
//     isDone: boolean
// }
// type TechnologiesType = {
//     [userID: string]: Array<CourseType>
// }
//
// const samuraiID_1 = "64jf-87kg"
// const samuraiID_2 = "90lg-34ks"
// const samuraiID_3 = "12jm-05fd"
//
// export const samurai: Array<samuraiType> = [
//     {id: samuraiID_1, name: "Bob", status: "online"},
//     {id: samuraiID_2, name: "Alex", status: "offline"},
//     {id: samuraiID_3, name: "Ann", status: "offline"},
// ]
//
// export const technologies: TechnologiesType = {
//     [samuraiID_1]: [
//         {name: "HTML", mentor: "Svetlana", isDone: true},
//         {name: "JS", mentor: "Viktor", isDone: true},
//         {name: "React", mentor: "Dmitrij", isDone: false},
//         {name: "Redux", mentor: "Valera", isDone: false},
//         {name: "HomeWorks", mentor: "Ignat", isDone: true},
//     ],
//     [samuraiID_2]: [
//         {name: "HTML", mentor: "Svetlana", isDone: true},
//         {name: "JS", mentor: "Viktor", isDone: true},
//         {name: "React", mentor: "Dmitrij", isDone: true},
//         {name: "Redux", mentor: "Valera", isDone: false},
//         {name: "HomeWorks", mentor: "Ignat", isDone: true},
//     ],
//     [samuraiID_3]: [
//         {name: "HTML", mentor: "Svetlana", isDone: true},
//         {name: "JS", mentor: "Viktor", isDone: true},
//         {name: "React", mentor: "Dmitrij", isDone: false},
//         {name: "Redux", mentor: "Valera", isDone: false},
//         {name: "HomeWorks", mentor: "Ignat", isDone: false},
//     ],
// }
//
// export const updateCourseStatus = (samuraiID: string, name: CourseNameType, isDone: boolean) => {
//     return {...technologies,
//         [samuraiID]: technologies[name].map(c => c.name === name ? {...c, isDone} : c)
//     }
// }

// type ActionType = {
//     type: "SUM"|"SUB"|"MULT"|"DIV"
//     payload: number
// }
//
// export const calculator = (state: number, action: ActionType) => {
//     switch (action.type) {
//         case "SUM":
//             return state + action.payload
//         case "SUB":
//             return state - action.payload
//         case "DIV":
//             return state / action.payload
//         default:
//             return state
//     }
// }

// type ActionType = {
//     type: "SUM"|"SUB"|"MULT"|"DIV"
//     payload: number
// }
//
// export const calculator = (state: number, action: ActionType): number => {
//     switch (action.type) {
//         case "SUM":
//             return state + action.payload
//         case "SUB":
//             return state - action.payload
//         case "DIV":
//             return state / action.payload
//         default:
//             return state
//     }
// }

// type ActionType = {
//     type: "SUM"|"SUB"|"MULT"|"DIV"
//     payload: number
// }
//
// export const calculator = (state: number, action: ActionType): number => {
//     switch (action.type) {
//         case "SUM":
//             return state + action.payload
//         case "SUB":
//             return state - action.payload
//         case "DIV":
//             return state / action.payload
//         case "MULT":
//             return state * action.payload
//         default:
//             return state
//     }
// }
//
// const result = calculator(10, {props., payload: 5})
// console.log(result)
//
// type ActionType = {
//     type: "SUM"|"SUB"|"MULT"|"DIV"|"EXP"
//     payload: number
// }
//
// export const calculator = (state: number, action: ActionType): number => {
//     switch (action.type) {
//         case "SUM":
//             return state + action.payload
//         case "SUB":
//             return state - action.payload
//         case "DIV":
//             return state / action.payload
//         case "EXP":
//             return state ** action.payload
//         default:
//             return state
//     }
// }
// console.log(calculator(10, {type: "MULT", payload: 2}))

// type ActionType = {
//     type: "SUM"|"SUB"|"MULT"|"DIV"|"EXP"
//     payload: number
// }
//
// export const calculator = (state: number, action: ActionType): number => {
//     switch (action.type) {
//         case "SUM":
//             return state + action.payload
//         case "SUB":
//             return state - action.payload
//         case "DIV":
//             return state / action.payload
//         case "MULT":
//             return state * action.payload
//         case "EXP":
//             return state ** action.payload
//         default:
//             return state
//     }
// }
// const result = calculator(10, {type: "EXP", payload: 0})
// if (!(result - 1)){
//     console.log("IT-INCUBATOR")
// }


// type UserType = {
//     id: number
//     userName: string
//     email: string
//     password: string
// }
//
// type ChangeUserPasswordTypeAT = {
//     type: "CHANGE-USER-PASSWORD"
//     payload: {
//         id: number,
//         newPassword: string
//     }
// }
//
// export const userReducer =
//     (state: UserType[], action: ChangeUserPasswordTypeAT): UserType[] => {
//         switch (action.type) {
//             case "CHANGE-USER-PASSWORD":
//                 return state.map(u =>
//                     u.id === action.payload.id
//                         ? {...u, password: action.payload.newPassword}
//                         : u)
//             default:
//                 return state
//         }
//     }


// import React, {useState, MouseEvent} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
//
// function ColorButton() {
//     const [isColored, setIsColored] = useState<boolean>(false)
//     return (
//         <button
//             style={{ backgroundColor: `${ isColored === true ? "red": ""}`}}
//             onClick={()=>setIsColored(true)}
//         >
//             Меняю цвет по клику
//         </button>
//     )
// }
//
//
// ReactDOM.render(
//     <ColorButton/>, document.getElementById('root')
// );

// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
//
// function UsersList() {
//     const [users, setUsers] = useState<Array<string>>(["Bob", "Alex", "Ann"])
//     const getUser = (user: string, i: number) => <li key={i}>{user}</li>
//
//     const usersList = (ЫЫЫ === 0)
//         ? <p>List is empty</p>
//         :  <ul>
//             { users.map(getUser)}
//         </ul>
//
//     return (
//         <main>
//             <button onClick={()=>setUsers([])}>Clear list</button>
//             <h4>User list:</h4>
//             {usersList}
//         </main>
//     )
// }
//
// ReactDOM.render(
//     <UsersList/>, document.getElementById('root')
// );

// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
//
// function PasswordChecker() {
//     const [password, setPassword] = useState<string>("")
//     return (
//         <main>
//             <p>Your password must have more than 8 charters!</p>
//             <input
//                 placeholder={"Enter your password"}
//                 value={password}
//                 onChange={e => setPassword(e.currentTarget.value)}
//                 type={"password"}
//             />
//             {password.length < 9 && <p style={{color: "red"}}>The password is too short!</p>}
//         </main>
//     )
// }
//
// ReactDOM.render(
//     <PasswordChecker/>, document.getElementById('root')
// );


// type StudentType = {
//     id: number
//     name: string
// }
//
// type FriendsType = {
//     [key: string]: Array<string>
// }
//
// export const students: Array<StudentType> = [
//     {id: 1, name: "Bob"},
//     {id: 2, name: "Alex"},
//     {id: 3, name: "Ann"},
//     {id: 4, name: "Charley"},
// ]
//
// export const friends: FriendsType = {
//     1: ["Oliver", "Jack", "Oscar",],
//     2: ["Jack", "Lewis", "Thomas",],
//     3: ["William", "Michael", "Lewis",],
//     4: ["Oscar", "James", "William",],
// }
//
// console.log(friends[3][1])

//
// type StudentType = {
//     id: number
//     name: string
// }
//
// type FriendsType = {
//     [key: string]: Array<String>
// }
//
// export const students: Array<StudentType> = [
//     {id: 1, name: "Bob"},
//     {id: 2, name: "Alex"},
//     {id: 3, name: "Ann"},
//     {id: 4, name: "Charley"},
// ]
//
// export const friends: FriendsType = {
//     1: ["Oliver", "Jack", "Oscar",],
//     2: ["Jack", "Lewis", "Thomas",],
//     3: ["William", "Michael", "Lewis",],
//     4: ["Oscar", "James", "William",],
// }
//
// console.log(friends[students[0].id][3])



// type StudentType = {
//     id: number
//     name: string
// }
//
// type FriendsType = {
//     [key: string]: Array<string>
// }
//
// export const students: Array<StudentType> = [
//     {id: 1, name: "Bob"},
//     {id: 2, name: "Alex"},
//     {id: 3, name: "Ann"},
//     {id: 4, name: "Charley"},
// ]
//
// export const friends: FriendsType = {
//     1: ["Oliver", "Jack", "Oscar",],
//     2: ["Jack", "Lewis", "Thomas",],
//     3: ["William", "Michael", "Lewis",],
//     4: ["Oscar", "James", "William",],
// }
//
// const getMutualFriends = (st_1: StudentType, st_2: StudentType,) => {
//     const result: Array<string> = []
//     friends[st_1.id].forEach(f => friends[st_2.name].includes(f)? result.push(f): null)
//     return result
// }

//
// import React, {useState} from "react";
//
// type UserType = {
//     id: number
//     name: string
//     status: "online" | "offline"
// }
//
// type AddressType = {
//     country: string
//     city: string
//     email: string
// }
//
// type AdressesType = {
//     [userID: string]: AddressType
// }
//
// const users: Array<UserType> = [
//     {id: 1, name: "Bob", status: "online"},
//     {id: 2, name: "Alex", status: "offline"},
//     {id: 3, name: "Ann", status: "offline"},
// ]
//
// const addresses: AdressesType = {
//     1: {country: "Russia", city: "Moscow", email: "hey@email.com"},
//     2: {country: "Ukraine", city: "Kiev", email: "yo@send.ua"},
//     3: {country: "Belarus", city: "Minsk", email: "wow@gogo.ru"},
//
// }
//
// const updateUserAddress = (userID: number, key: string, newValue: string) => {
//     return {...addresses,
//         [userID]: {...addresses[userID], [key]: newValue}
//     }
// }


// type ActionType = {
//     type: "SUM"|"SUB"|"MULT"|"DIV"
//     payload: number
// }
//
// export const calculator = (state: number, action: ActionType): number => {
//     switch (action.type) {
//         case "SUM":
//             return state + action.payload
//         case "SUB":
//             return state - action.payload
//         case "DIV":
//             return state / action.payload
//         case "MULT":
//             return state * action.payload
//         default:
//             return state
//     }
// }
//
// const result = calculator(10, {type:"SUB", payload: 5})
// console.log(result)

// type ActionType = {
//     type: "SUM"|"SUB"|"MULT"|"DIV"|"EXP"
//     payload: number
// }
//
// export const calculator = (state: number, action: ActionType): number => {
//     switch (action.type) {
//         case "SUM":
//             return state + action.payload
//         case "SUB":
//             return state - action.payload
//         case "DIV":
//             return state / action.payload
//         case "MULT":
//             return state * action.payload
//         case "EXP":
//             return state ** action.payload
//         default:
//             return state
//     }
// }
// const result = calculator(10, {type:"EXP", payload: 0})
// if (!(result - 1)){
//     console.log("IT-INCUBATOR")
// }



// type UserType = {
//     id: number
//     userName: string
//     email: string
//     password: string
// }
//
// type ChangeUserPasswordTypeAT = {
//     type: "CHANGE-USER-PASSWORD"
//     payload: {
//         id: number
//         newPassword: string
//     }
// }
//
// export const userReducer =
//     (state: UserType[], action: ChangeUserPasswordTypeAT): UserType[] => {
//         switch (action.type) {
//             case "CHANGE-USER-PASSWORD":
//                 return state.map(u =>
//                     u.id === action.payload.id
//                         ? {...u, password: action.payload.newPassword}
//                         : u)
//             default:
//                 return state
//         }
//     }



// type Status = 'Stopped' | 'Playing' | 'Paused'
// type StateType = {
//     volume: number // in percents
//     trackUrl: string // 'https://blabla.com/track01.mp3',
//     currentPlayPosition: number // milliseconds,
//     status: Status
// }
//
// export const playerReducer = (state: StateType, action: any) => {
//     switch (action.type) {
//         case 'TRACK-URL-CHANGED':
//             return {
//                 ...state,
//                 trackUrl: action.url
//             }
//         default:
//             return state
//     }
// }
//
// const muteTrackAC = () => ({type: 'TRACK-MUTED'})
// const changeTrackAC = (url: string) => ({type: 'TRACK-URL-CHANGED', url})
// const changeTrackPlayStatusAC = (status: Status) => ({type: 'TRACK-STATUS-CHANGED', status})

// type Status = 'Stopped' | 'Playing' | 'Paused'
// type StateType = {
//     volume: number // in percents
//     trackUrl: string // 'https://blabla.com/track01.mp3',
//     currentPlayPosition: number // milliseconds,
//     status: Status
// }
// export const playerReducer = (state: StateType, action: any) => {
//     switch (action.type) {
//         case 'TRACK-STATUS-CHANGED':
//             return {
//                 ...state,
//                 status: action.status
//             }
//         default:
//             return state
//     }
// }
//
// const muteTrackAC = () => ({type: 'TRACK-MUTED'})
// const changeTrackAC = (url: string) => ({type: 'TRACK-URL-CHANGED', url})
// const changeTrackPlayStatusAC = (status: Status) => ({type: 'TRACK-STATUS-CHANGED', status})
//
// const state: StateType = {
//     status: 'Stopped',
//     currentPlayPosition: 1213,
//     trackUrl: 'https://blabla.com/track01.mp3',
//     volume: 100
// }
//
// const newState = playerReducer(state, 'Paused')
// console.log(newState.status === 'Paused')
//
// type Status = 'Stopped' | 'Playing' | 'Paused'
// type StateType = {
//     volume: number // in percents
//     trackUrl: string // 'https://blabla.com/track01.mp3',
//     currentPlayPosition: number // milliseconds,
//     status: Status
// }
// export const playerReducer = (state: StateType, action: any) => {
//     switch (action.type) {
//         case 'TRACK-VOLUME-CHANGED':
//             return {
//                 ...state,
//                 volume: 20
//             }
//         default:
//             return state
//     }
// }
//
// const muteTrackAC = () => ({type: 'TRACK-MUTED'})
// const changeVolumeAC = (volumeLevel: number) => ({type: 'TRACK-VOLUME-CHANGED', volumeLevel})
// const changeTrackAC = (url: string) => ({type: 'TRACK-URL-CHANGED', url})
// const changeTrackPlayStatusAC = (status: Status) => ({type: 'TRACK-STATUS-CHANGED', status})
//
// const state: StateType = {
//     status: 'Stopped',
//     currentPlayPosition: 1213,
//     trackUrl: 'https://blabla.com/track01.mp3',
//     volume: 100
// }
// const newState = playerReducer(state, changeVolumeAC(20))
// console.log(newState.volume === 20)
//
// export const reducer = (state: any, action: any) => {
//     switch (action.type) {
//         case 'TRACK-LIKED':
//             return {
//                 ...state,
//                 [action.id]: {
//                     ...state[action.id],
//                     likesCount: state[action.id].likesCount + 1
//                 }
//             }
//         default:
//             return state
//     }
// }
//
// const likeTrackAC = (trackId: number) => ({type: 'TRACK-LIKED', trackId})
//
//
// const state = {
//     12: {id: 12, likesCount: 10},
//     14: {id: 14, likesCount: 2},
//     100: {id: 100, likesCount: 0},
// }
// const newState = reducer(state, likeTrackAC(14))
//
// console.log(newState[14].likesCount === 3)

// export const reducer = (state: any, action: any) => {
//     switch (action.type) {
//         case 'TRACK-ADDED':
//             return true
//         default:
//             return state
//     }
// }
//
// const addTrackAC = (trackId: number) => ({type: 'TRACK-ADDED', trackId})
//
//
// const state = [
//     {id: 12, likesCount: 10},
//     {id: 14, likesCount: 2},
//     {id: 100, likesCount: 0}
// ]
// const newState = reducer(state, addTrackAC(300))
//
// console.log(newState[3].likesCount === 0)

// export const reducer = (state: any, action: any) => {
//     switch (action.type) {
//         case 'TRACK-DELETED':
//             return state.filter((track: any) => state(''))
//         default:
//             return state
//     }
// }
//
// const deleteTrackAC = (trackId: number) => ({type: 'TRACK-DELETED', trackId})
//
//
// const state = [
//     {id: 12, likesCount: 10},
//     {id: 14, likesCount: 2},
//     {id: 100, likesCount: 0}
// ]
// const newState = reducer(state, deleteTrackAC(14))
//
// console.log(newState.length === 2)

// type StateType = {
//     volume: number // in percents
//     trackUrl: string // 'https://blabla.com/track01.mp3',
//     currentPlayPosition: number // milliseconds,
// }
//
// export const reducer = (state: StateType, action: any) => {
//     switch (action.type) {
//         case 'TRACK-URL-CHANGED':
//             return {
//                 ...state,
//                 trackUrl: action.url
//             }
//         case 'TRACK-MUTED':
//             return {
//                 ...state,
//                 volume: 0
//             }
//         case 'TRACK-REWOUND-TO-START':
//             return {
//                 ...state,
//                 currentPlayPosition: 0
//             }
//         default:
//             return state
//     }
// }
//
// const muteTrackAC = () => ({type: 'TRACK-MUTED'})
// const changeTrackAC = (url: string) => ({type: 'TRACK-URL-CHANGED', url})
// // перемотатьНаНачало:
// const rewindToStart = () => ({type: 'TRACK-REWOUND-TO-START'})

// type Status = 'Stopped' | 'Playing' | 'Paused'
// type StateType = {
//     volume: number // in percents
//     trackUrl: string // 'https://blabla.com/track01.mp3',
//     currentPlayPosition: number // milliseconds,
//     status: Status
// }
//
// export const playerReducer = (state: StateType, action: any) => {
//     switch (action.type) {
//         case XXX:
//             return {
//                 ...state,
//                 trackUrl: action.url
//             }
//         default:
//             return state
//     }
// }
//
// const muteTrackAC = () => ({type: 'TRACK-MUTED'})
// const changeTrackAC = (url: string) => ({type: 'TRACK-URL-CHANGED', url})
// const changeTrackPlayStatusAC = (status: Status) => ({type: 'TRACK-STATUS-CHANGED', status})






// type Status = 'Stopped' | 'Playing' | 'Paused'
// type StateType = {
//     volume: number // in percents
//     trackUrl: string // 'https://blabla.com/track01.mp3',
//     currentPlayPosition: number // milliseconds,
//     status: Status
// }
// export const playerReducer = (state: StateType, action: any) => {
//     switch (action.type) {
//         case 'TRACK-VOLUME-CHANGED':
//             return {
//                 ...state,
//                 XXX
//             }
//         default:
//             return state
//     }
// }
//
// const muteTrackAC = () => ({type: 'TRACK-MUTED'})
// const changeVolumeAC = (volumeLevel: number) => ({type: 'TRACK-VOLUME-CHANGED', volumeLevel})
// const changeTrackAC = (url: string) => ({type: 'TRACK-URL-CHANGED', url})
// const changeTrackPlayStatusAC = (status: Status) => ({type: 'TRACK-STATUS-CHANGED', status})
//
// const state: StateType = {
//     status: 'Stopped',
//     currentPlayPosition: 1213,
//     trackUrl: 'https://blabla.com/track01.mp3',
//     volume: 100
// }
// const newState = playerReducer(state, changeVolumeAC(20))
// console.log(newState.volume === 20)






// export const reducer = (state: any, action: any) => {
//     switch (action.type) {
//         case 'TRACK-LIKED':
//             return {
//                 ...state,
//                 [XXX]: {
//                     ...state[XXX],
//                     likesCount: state[XXX].likesCount + 1
//                 }
//             }
//         default:
//             return state
//     }
// }
//
// const likeTrackAC = (trackId: number) => ({type: 'TRACK-LIKED', trackId})
//
//
// const state = {
//     12: {id: 12, likesCount: 10},
//     14: {id: 14, likesCount: 2},
//     100: {id: 100, likesCount: 0},
// }
// const newState = reducer(state, likeTrackAC(14))
//
// console.log(newState[14].likesCount === 3)




// export const reducer = (state: any, action: any) => {
//     switch (action.type) {
//         case 'TRACK-ADDED':
//             return XXX
//         default:
//             return state
//     }
// }
//
// const addTrackAC = (trackId: number) => ({type: 'TRACK-ADDED', trackId})
//
//
// const state = [
//     {id: 12, likesCount: 10},
//     {id: 14, likesCount: 2},
//     {id: 100, likesCount: 0}
// ]
// const newState = reducer(state, addTrackAC(300))
//
// console.log(newState[3].likesCount === 0)
//
// // Что нужно написать вместо XXX, чтобы трек корректно добавился и в консоли увидеть true?
//
//
// export const reducer = (state: any, action: any) => {
//     switch (action.type) {
//         case 'TRACK-DELETED':
//             return state.filter((track: any) => XXX)
//         default:
//             return state
//     }
// }
//
// const deleteTrackAC = (trackId: number) => ({type: 'TRACK-DELETED', trackId})
//
//
// const state = [
//     {id: 12, likesCount: 10},
//     {id: 14, likesCount: 2},
//     {id: 100, likesCount: 0}
// ]
// const newState = reducer(state, deleteTrackAC(14))
//
// console.log(newState.length === 2)
//
//
// // Что нужно написать вместо XXX, чтобы корректно удалить трек и в консоли увидеть true?
//
//
//
// type StateType = {
//     volume: number // in percents
//     trackUrl: string // 'https://blabla.com/track01.mp3',
//     currentPlayPosition: number // milliseconds,
// }
//
// export const reducer = (state: StateType, action: any) => {
//     switch (action.type) {
//         case XXX:
//             return {
//                 ...state,
//                 trackUrl: action.url
//             }
//         case YYY:
//             return {
//                 ...state,
//                 volume: 0
//             }
//         case ZZZ:
//             return {
//                 ...state,
//                 currentPlayPosition: 0
//             }
//         default:
//             return state
//     }
// }
//
// const muteTrackAC = () => ({type: 'TRACK-MUTED'})
// const changeTrackAC = (url: string) => ({type: 'TRACK-URL-CHANGED', url})
// // перемотатьНаНачало:
// const rewindToStart = () => ({type: 'TRACK-REWOUND-TO-START'})
//
// // Какие типы должны быть вместо XXX, YYY и ZZZ?
// // Ответ дать через пробел, например:   'BLABLA' 'HEYНЕY' 'HIPHOP'
