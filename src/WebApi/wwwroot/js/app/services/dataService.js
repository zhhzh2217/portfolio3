﻿define(['jquery'], function ($) {
    var postsUrl = "api/posts";
    

    var getComments = function (callback) {
        var url = "api/comments";
        $.getJSON(url, function (data) {
            callback(data);
        });
    };

    var getPosts = function (url, callback) {
        if (url === undefined) {
            url = postsUrl;
        }
        $.getJSON(url, function (data) {
            callback(data);
        });
    };

    var getHistoryList = function ( callback) {
        var url = "api/history";
        $.getJSON(url, function (data) {
            callback(data);
        });
    };

    var getWordCloud = function (searchString, callback) {
        var url = "api/wordcloud?=" + searchString;
        console.log(url);
        $.getJSON(url, function (data) {
            callback(data);
        });
        //return $.ajax({
        //    type: "Get",
        //    url: "api/wordcloud?=" + searchString,
        //    dataType: 'json',
        //    contentType: "application/json",
        //    success: function (data) {
        //        console.log();
        //        callback(data);
        //    }
   
        //});

    };
    var getSearchResult = function (url, searchString, callback) {
        if (url === undefined) {
            url = "api/search?=" + searchString;
        }
        $.getJSON(url, function (data) {
            callback(data);
        });
    };
    var getPostDetail = function ( questionID, callback) {
        
        url = "api/postdetail?=" + questionID.toString();
        console.log(url);
        $.getJSON(url, function (data) {
            callback(data);
        });
    };
    //var getSearchResult = function (searchString, callback) {
    //    var searchUrl = "api/search?=" + searchString();
    //    $.getJSON(searchUrl, function (data) {
    //        callback(data);
    //    });
    //};

    return {
        getComments,
        getPosts,
        getSearchResult,
        getHistoryList,
        getPostDetail,
        getWordCloud
    };
});




        