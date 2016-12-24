<%@ Page Title="Stock Quote" Language="C#" MasterPageFile="~/Test01.Master" AutoEventWireup="true" CodeBehind="stockquote.aspx.cs" Inherits="Test01.stockquote" %>

<asp:Content ID="Content2" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <label>Stock Quote:</label>
    <input id="symbolText" type="text" placeholder="Stock Symbol" />
    <input id="btnGet" type="button" value="Get" />
    <p id="outputText"></p>
</asp:Content>
