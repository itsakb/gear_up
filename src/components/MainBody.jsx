/*eslint-disable*/
import React from 'react';
import axios from 'axios';
import {useState,useEffect} from 'react';

function MainBody() {
    const [username,setUsername] = useState('');
    const [repo,setRepo] = useState('');
    const[users,setUsers] = useState([]);
    const [err,setErr] = useState(false);
    const [show,setShow] = useState(true);

    function Submitb(event) {
        event.preventDefault();
        getUsers();
    }

    function Reload() {
        location.reload();
    }

    function getUsers() {
        axios({
                method:"get",
                url:`https://api.github.com/repos/${username}/${repo}/contributors`,
        }).then(res=> {
                setShow(false);
                setUsers(res.data);
        }).catch(err =>{
                setErr(true);
        })
    }

        return (
            <div className="Search">
                <section className="text-gray-600 body-font">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-col text-center w-full mb-12">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Search Contributions</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Enter Username and Repository name to get total number of contributions.</p>
                        </div>
                        <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
                        <div className="relative flex-grow w-full">
                            <label for="full-name" className="leading-7 text-sm text-gray-600">Username</label>
                            <input type="text" id="full-name" name="full-name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-transparent focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder="Enter username" onChange={event => setUsername(event.target.value)}/>
                        </div>
                        <div className="relative flex-grow w-full">
                            <label for="homepage" className="leading-7 text-sm text-gray-600">Repository</label>
                            <input type="url" id="homepage" name="homepage" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-transparent focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder="Enter repo name" onChange={event => setRepo(event.target.value)}/>
                        </div>
                        <a href="#contributionlist">
                        <button className="text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg" onClick={Submitb}>Search</button>
                        </a>
                        </div>
                    </div>
                </section>
                {
                    err ? <section className="text-gray-600 body-font">
                            <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                                <div className="text-center lg:w-2/3 w-full">
                                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">No such repo found!</h1>
                                <br />
                                <div className="flex justify-center">
                                    <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg" onClick={Reload}>Reset</button>
                                </div>
                                </div>
                            </div>
                            </section> : show ? <><img className="Box" src="https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/000/456/275/datas/original.gif" />
                            <br /></> :
                        <>
                        <div className="flex flex-col text-center w-full mb-12">
                            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Contributions list</h1>
                        </div>
                        <div className="Table">
                        <div className="flex flex-col">
                        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Name
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            ID
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Contribution
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {
                                        users.map((person) => {
                                        return (
                                            <tr key={person.id}>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <div className="flex-shrink-0 h-10 w-10">
                                                        <img className="h-10 w-10 rounded-full" src={person.avatar_url} alt="git avatar" />
                                                    </div>
                                                        <div className="ml-4">
                                                            <a href={person.html_url} target="_blank">
                                                                <div className="text-sm text-gray-500">{person.login}</div>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm font-medium text-gray-900">{person.id}</div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm font-medium text-gray-900">{person.contributions}</div>
                                                </td>
                                            </tr>
                                        )}) 
                                    }
                                </tbody>
                                </table>
                            </div>
                                <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                                <div className="flex justify-center">
                                    <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg" onClick={Reload}>Reset</button>
                                </div>
                                </div>
                                <img className="Box" src="https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/000/456/275/datas/original.gif" />
                            </div>
                        </div>
                        </div>
                        </div>
                        </>
                        }
                    </div> 
                    )
                }


export default MainBody;