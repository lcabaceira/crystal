define("cdf/components/CommentsComponent.ext",["../dashboard/Dashboard.ext"],function(e){var t={getComments:function(t){var n="";
return"LIST_ALL"==t||"LIST_ACTIVE"==t||"GET_LAST"==t?n="list":"DELETE_COMMENT"==t?n="delete":"ARCHIVE_COMMENT"==t?n="archive":"ADD_COMMENT"==t&&(n="add"),e.getCdfBase()+"/comments/"+n+"?ts="+(new Date).getTime()
}};return t});