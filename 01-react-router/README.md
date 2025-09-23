# React Router Example

Single Page Application Routing with React Router v6.25

> [!NOTE]  
> This is an example repo from a WBS Coding School recap

This repo is using a [Data Router](https://reactrouter.com/en/main/routers/create-browser-router) to exemplify the use of createBrowserRouter and [createRoutesFromElements](https://reactrouter.com/en/main/utils/create-routes-from-elements) to simplify the creation of routes.

It showcases the concept of Layout routes, the use of the [<Outlet>](https://reactrouter.com/en/main/components/outle)-Component. This comes along with a ready made, easy to use [Outlet Context](https://reactrouter.com/en/main/hooks/use-outlet-context) to share data across the Routes, based in the Layout.

With [loaders](https://reactrouter.com/en/main/route/loader) and the [useLoaderData](https://reactrouter.com/en/main/hooks/use-loader-data) hook, we can simplify data fetching, and with [actions](https://reactrouter.com/en/main/route/action) form submission.

(The little Data API this example fetches from has a long cold start, so you might see nochting for a while.)
