<%@ Page Title="Stock Quote" Language="C#" MasterPageFile="~/Test01.Master" AutoEventWireup="true" CodeBehind="stockquote.aspx.cs" Inherits="Test01.stockquote" %>
<asp:Content ID="Content2" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <label>Stock Quote:</label>
    <input id="btnGet" type="text" placeholder="Stock Symbol" />
    <input type="button" value="Get" />
</asp:Content>
