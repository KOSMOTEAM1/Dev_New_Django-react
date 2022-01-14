import React, {useEffect, useState, useMemo} from 'react';
import Pagination1 from 'react-js-pagination';
import Header from '../Header';
import {TableHeader, Search} from '../DataTable';
import useFullPageLoader from '../../hooks/useFullPageLoader';
// import ExternalInfo from "components/ExternalInfo";
// import AppConfig from "App.config";
function countpage(totalItems, ITEMS_PER_PAGE) {
    let result;
    if (totalItems % ITEMS_PER_PAGE === 0) {
        result = totalItems / ITEMS_PER_PAGE;
    } else {
        result = parseInt(totalItems / ITEMS_PER_PAGE + 1, 10);
    }
    return result;
}
const OttTable = () => {
    const [comments, setComments] = useState([]);
    const [totalItems, setTotalItems] = useState(0);
    const [loader, showLoader, hideLoader] = useFullPageLoader();
    const [currentPage, setCurrentPage] = useState(1);
    const [search, setSearch] = useState('');
    const [ottsearch, setottSearch] = useState('');
    const [sorting, setSorting] = useState({field: '', order: ''});

    const ITEMS_PER_PAGE = 10;

    const headers = [
        {name: '날짜', field: 'date', sortable: true},
        {name: 'OTT 서비스', field: 'OTT', sortable: true},
        {name: '순위', field: 'rank', sortable: true},
        {name: '영상제목', field: 'name', sortable: true}
    ];

    useEffect(() => {
        const getData = () => {
            showLoader();

            fetch('http://localhost:8000/chartapi/')
                .then((response) => response.json())
                .then((json) => {
                    hideLoader();
                    setComments(json);
                    // console.log(json);
                });
        };

        getData();
    }, []);

    const commentsData = useMemo(() => {
        let computedComments = comments;

        if (search) {
            computedComments = computedComments.filter(
                (comment) =>
                    comment.OTT.toLowerCase().includes(search.toLowerCase()) ||
                    comment.name.toLowerCase().includes(search.toLowerCase()) ||
                    comment.rank.toLowerCase().includes(search.toLowerCase()) ||
                    comment.date.includes(search)
            );
        }
        if (ottsearch) {
            computedComments = computedComments.filter(
                (comment) =>
                    comment.OTT.toLowerCase().includes(
                        ottsearch.toLowerCase()
                    ) ||
                    comment.name.toLowerCase().includes(ottsearch.toLowerCase())
            );
        }
        setTotalItems(computedComments.length);
        if (sorting.field) {
            const reversed = sorting.order === 'asc' ? 1 : -1;
            computedComments = computedComments.sort(
                (a, b) =>
                    reversed * a[sorting.field].localeCompare(b[sorting.field])
            );
        }
        return computedComments.slice(
            (currentPage - 1) * ITEMS_PER_PAGE,
            (currentPage - 1) * ITEMS_PER_PAGE + ITEMS_PER_PAGE
        );
    }, [comments, currentPage, search, ottsearch, sorting]);

    return (
        <>
            <Header title="OTTE DATA SEARCH TABLE" />

            <div className="row w-100">
                <div className="col mb-3 col-12 text-center">
                    <div className="row">
                        <div className="col-md-6">
                            <Pagination1
                                activePage={currentPage}
                                itemsCountPerPage={ITEMS_PER_PAGE}
                                totalItemsCount={totalItems}
                                pageRangeDisplayed={5}
                                prevPageText="‹"
                                nextPageText="›"
                                onChange={(page) => setCurrentPage(page)}
                            />
                            총 {totalItems}개 데이터,{'  '}
                            {countpage(totalItems, ITEMS_PER_PAGE)} 페이지
                        </div>
                        <div className="col-md-6 d-flex flex-row-reverse">
                            <input
                                type="radio"
                                name="ottservice"
                                value="netflix"
                                onClick={(value) => {
                                    console.log(value.target.value);
                                    setottSearch(value.target.value);
                                    setCurrentPage(1);
                                }}
                            />
                            넷플릭스
                            <input
                                type="radio"
                                name="ottservice"
                                value="wavve"
                                onClick={(value) => {
                                    console.log(value.target.value);
                                    setottSearch(value.target.value);
                                    setCurrentPage(1);
                                }}
                            />
                            웨이브
                            <input
                                type="radio"
                                name="ottservice"
                                value="tving"
                                onClick={(value) => {
                                    console.log(value.target.value);
                                    setottSearch(value.target.value);
                                    setCurrentPage(1);
                                }}
                            />
                            티빙
                            <input
                                type="radio"
                                name="ottservice"
                                value="disney"
                                onClick={(value) => {
                                    console.log(value.target.value);
                                    setottSearch(value.target.value);
                                    setCurrentPage(1);
                                }}
                            />
                            디즈니플러스
                            <input
                                type="radio"
                                name="ottservice"
                                value="watcha"
                                onClick={(value) => {
                                    console.log(value.target.value);
                                    setottSearch(value.target.value);
                                    setCurrentPage(1);
                                }}
                            />
                            왓챠
                            <input
                                type="radio"
                                name="ottservice"
                                value="kino"
                                onClick={(value) => {
                                    console.log(value.target.value);
                                    setottSearch(value.target.value);
                                    setCurrentPage(1);
                                }}
                            />
                            종합(KINOLIGHTS)
                            <input
                                type="radio"
                                name="ottservice"
                                value=""
                                onClick={(value) => {
                                    console.log(value.target.value);
                                    setottSearch(value.target.value);
                                    setCurrentPage(1);
                                }}
                            />
                            전체
                        </div>
                        <div>
                            <Search
                                onSearch={(value) => {
                                    console.log(value);
                                    setSearch(value);
                                    setCurrentPage(1);
                                }}
                            />
                        </div>
                    </div>

                    <table className="table table-striped">
                        <TableHeader
                            headers={headers}
                            onSorting={(field, order) =>
                                setSorting({field, order})
                            }
                        />
                        <tbody>
                            {commentsData.map((comment) => (
                                <tr>
                                    <th key={comment.date}>{comment.date}</th>
                                    <td>{comment.OTT}</td>
                                    <td>{comment.rank}</td>
                                    <td>{comment.name}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            {loader}
        </>
    );
};

export default OttTable;
