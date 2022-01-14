import React, {useEffect, useState, useMemo} from 'react';
import Header from '../Header';
import {TableHeader, Search} from '../DataTable';
import useFullPageLoader from '../../hooks/useFullPageLoader';
// import ExternalInfo from "components/ExternalInfo";
// import AppConfig from "App.config";

const OttTable = () => {
    const [comments, setComments] = useState([]);
    const [loader, showLoader, hideLoader] = useFullPageLoader();
    const [currentPage, setCurrentPage] = useState(1);
    const [search, setSearch] = useState('');
    const [ottsearch, setottSearch] = useState('');
    const [sorting, setSorting] = useState({field: '', order: ''});

    const ITEMS_PER_PAGE = 10;

    const headers = [
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
                    comment.rank.toLowerCase().includes(search.toLowerCase())
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
                        <div className="col-md-10">
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
                            <img
                                src="data:image/png;base64,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"
                                alt="netflix"
                                width="80"
                                height="50"
                            />
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
