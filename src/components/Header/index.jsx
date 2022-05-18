import React from 'react'
import style from './Header.module.css'
import clsx from 'clsx'

function Header(props) {
    return (
        <div className={style.header}>
            <div className={style.container}>
                <div className={style.headerContent}>
                    <div className={style.logo}>
                        <a href="#">
                            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzQiIGhlaWdodD0iMzQiIHZpZXdCb3g9IjAgMCAzNCAzNCI+CiAgPGRlZnM+CiAgICA8cG9seWdvbiBpZD0icGFnZS0xLWNvcHktNEAxeC1hIiBwb2ludHM9IjAgLjIwOCAzMy43OTMgLjIwOCAzMy43OTMgMzQgMCAzNCIvPgogIDwvZGVmcz4KICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgPG1hc2sgaWQ9InBhZ2UtMS1jb3B5LTRAMXgtYiIgZmlsbD0iI2ZmZiI+CiAgICAgIDx1c2UgeGxpbms6aHJlZj0iI3BhZ2UtMS1jb3B5LTRAMXgtYSIvPgogICAgPC9tYXNrPgogICAgPHBhdGggZmlsbD0iI0ZFRkVGRSIgZD0iTTMxLjI5MTY3MjIsMC4yMDc0IEwyLjQ5NDcyMzcxLDAuMjA3NCBDMS4xMTc4OTg5NywwLjIwNzQgMC4wMDAxMDUxNTQ2MzksMS4yOTgyMDQxMiAwLjAwMDEwNTE1NDYzOSwyLjY0MzEzMTk2IEwwLjAwMDEwNTE1NDYzOSwzMS41NjE3MDkzIEMwLjAwMDEwNTE1NDYzOSwzMi45MDczMzgxIDEuMTE3ODk4OTcsMzMuOTk5ODk0OCAyLjQ5NDcyMzcxLDMzLjk5OTg5NDggTDMxLjI5MTY3MjIsMzMuOTk5ODk0OCBDMzIuNjY5ODk5LDMzLjk5OTg5NDggMzMuNzkzMzAxLDMyLjkwNzMzODEgMzMuNzkzMzAxLDMxLjU2MTcwOTMgTDMzLjc5MzMwMSwyLjY0MzEzMTk2IEMzMy43OTMzMDEsMS4yOTgyMDQxMiAzMi42Njk4OTksMC4yMDc0IDMxLjI5MTY3MjIsMC4yMDc0IiBtYXNrPSJ1cmwoI3BhZ2UtMS1jb3B5LTRAMXgtYikiLz4KICAgIDxwYXRoIGZpbGw9IiNFRDI1MjQiIGQ9Ik0xMiAyNi45OTkzMzE5QzEyIDI4LjEwNDA1ODggMTEuMTA0NTAyNSAyOSAxMC4wMDA1MDEyIDI5IDguODk1NDk3NDUgMjkgOCAyOC4xMDQwNTg4IDggMjYuOTk5MzMxOSA4IDI1Ljg5NTYwNzEgOC44OTU0OTc0NSAyNSAxMC4wMDA1MDEyIDI1IDExLjEwNDUwMjUgMjUgMTIgMjUuODk1NjA3MSAxMiAyNi45OTkzMzE5TTIyIDI2Ljk5OTMzMTlDMjIgMjguMTA0MDU4OCAyMS4xMDQ4MDE3IDI5IDE5Ljk5OTE2NDkgMjkgMTguODk1ODY2NCAyOSAxOCAyOC4xMDQwNTg4IDE4IDI2Ljk5OTMzMTkgMTggMjUuODk1NjA3MSAxOC44OTU4NjY0IDI1IDE5Ljk5OTE2NDkgMjUgMjEuMTA0ODAxNyAyNSAyMiAyNS44OTU2MDcxIDIyIDI2Ljk5OTMzMTlNMjMuNTM5MTI0MiAxMi44NjM4OTQ1QzIyLjA2NTU1MjMgMTIuMDY1NDE5MyAyMS4wMDc2Mzk1IDExLjQ2Njk5MDQgMjEuMDA3NjM5NSAxMC40OTQxMTU5IDIxLjAwNzYzOTUgOS42MzA2Njg0MSAyMS44NDk5MzM1IDguMDQ0MzE4NzcgMjMuNTgxMjU2NiA4LjA0MzI5MjkgMjQuMjcwNTk5MyA4LjA0MjYwODk4IDI1LjE2NzA2MzUgOC4xNTQwODc3NCAyNS4zMTg5NTI2IDguMTk5OTEwM0wyNi42MDczNTQzIDUuMzgzODc0NjhDMjQuNDE3MTc3NiA0Ljg1NTg4OTM3IDIzLjQyOTcyMTUgNS4wMjYxODUxNSAyMy40Mjk3MjE1IDUuMDI2MTg1MTUgMjAuMDMyNTc1NCA1LjE0ODk0ODU4IDE3LjA4MTg5MTEgNy45NjkwODc3MSAxNy4wODE4OTExIDExLjA5MzIyODcgMTcuMDgxODkxMSAxMy4yODc5MjQxIDE4LjgzNzY0MzggMTQuNTg0OTc2MSAyMC42OTc4NDI1IDE1LjU1Nzg1MDYgMjIuMjk5MjI3OCAxNi4zNTU5ODM4IDIzLjA0ODA1MTYgMTYuOTgwNDAxNyAyMy4wNDgwNTE2IDE3LjkyODMxMzEgMjMuMDQ4MDUxNiAxOS4xMTczMDU5IDIxLjk4MDU3OTQgMTkuNzYwODczNSAyMC43MTQxMjkgMTkuODc2NDU1OEwyMC42MTI1MTU1IDE5Ljg4NTY4ODcgMTAuNDIxMDc3MSAxOS45NTc4NDIxIDExLjAxMzA1NSAxOC4wNDMyMTE1IDE2LjcyNzEyOTIgMTguMDQzMjExNSAxNy43Njk4MTc2IDE1LjUwNDE2MyAxMC4xODA2NzQ1IDE1LjUwNDE2M0M5LjE5MTA5NDIgMTUuNTA0MTYzIDguNzgxNDUzOTYgMTUuODMwMzkyMiA4LjYwNTEzNTE3IDE2LjE1NTU5NTZMNy4wMzQ5MDY1OSAyMS41NDY5Mjc0QzYuODY1MzE0ODMgMjIuMTMwMzEwMiA3LjMzMDE4NzQ2IDIyLjc1MzAxODIgOC4wNzEyMjIwNSAyMi45NTI3MjI1IDguMTMzNTM1NTEgMjIuOTY5MTM2NiA4LjE5MzcyNDY2IDIyLjk3NDYwNzkgOC4yNTUzMzAwMiAyMi45ODQ1MjQ3TDguMjUxNzg5NDggMjIuOTk4MjAzMSA4LjQwNDc0MDcyIDIyLjk5NTgwOTRDOC40ODY4ODEyIDIzLjAwMjMwNjYgOC41NjkzNzU3MyAyMy4wMDA1OTY4IDguNjQ3OTc1NjggMjIuOTk1MTI1NUwyMC42MDkzMjkgMjIuOTY5MTM2NiAyMC43MTQxMjkgMjIuOTYzMzIzM0MyNC4yMjE3Mzk5IDIyLjcxMzY5MjkgMjcgMjAuNzg3Nzc3NiAyNyAxNy4zMDM4OTUzIDI3IDE1LjMwODIyMDIgMjUuNjU3MDc0IDEzLjkzNjYyMTEgMjMuNTM5MTI0MiAxMi44NjM4OTQ1Ii8+CiAgPC9nPgo8L3N2Zz4K" alt="" />
                        </a>
                        <div className={style.menu}>
                            <div style={{width: 34}}></div>
                            <span style={{textTransform: 'uppercase', color: 'white', fontSize: '1.6rem'}}>Thế giới di động</span>
                        </div>
                    </div>
                    <div className={clsx(style.autoWidth, style.search)}>
                        <input type="text" name="search" placeholder=' Tìm kiếm trên Sendo' className={style.searchBox} />
                    <div className={style.searchBtn}>
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path d="M20.669 18.667h-1.059l-0.368-0.365c1.299-1.502 2.091-3.473 2.091-5.63 0-0.002 0-0.003 0-0.005v0c0-4.786-3.88-8.667-8.667-8.667s-8.667 3.88-8.667 8.667c0 4.786 3.88 8.667 8.667 8.667v0c0.002 0 0.004 0 0.006 0 2.155 0 4.126-0.79 5.638-2.097l-0.011 0.009 0.368 0.365v1.056l6.664 6.655 1.988-1.988-6.651-6.667zM12.667 18.667c-3.314 0-6-2.686-6-6s2.686-6 6-6v0c3.314 0 6 2.686 6 6s-2.686 6-6 6v0z"></path></svg>
                        Tìm kiếm
                    </div>
                    </div>
                    <div className={style.card}>
                        <svg width="32px" height="32px" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M8 18c-1.104 0-1.99.895-1.99 2 0 1.104.886 2 1.99 2a2 2 0 000-4m10 0c-1.104 0-1.99.895-1.99 2 0 1.104.886 2 1.99 2a2 2 0 000-4M4 2H1.999v1.999H4l3.598 7.588-1.353 2.451A2 2 0 008 17h12v-2H8.423a.249.249 0 01-.249-.25l.03-.121L9.102 13h7.449c.752 0 1.408-.415 1.75-1.029l3.574-6.489A1 1 0 0021 3.999H6.213l-.406-.854A1.997 1.997 0 004 2"></path></svg>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;