<%@ Page Title="Test01" Language="C#" MasterPageFile="~/Test01.Master" AutoEventWireup="true" CodeBehind="default.aspx.cs" Inherits="Test01._default" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
    <script src="Scripts\Test01.js"></script>
    <style type="text/css">
        #maxIntText {
            width: 65px;
        }

        #minIntText {
            width: 65px;
        }
    </style>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div>
        <h1 style="font-family: 'Courier New'">Test01</h1>
    </div>
    <div>
        <asp:Label runat="server" Font-Names="Courier New">Input:</asp:Label>
        <input type="text" id="inputText" style="font-family: 'Courier New'" />
        <br />
        <asp:Label runat="server" Font-Names="Courier New">Min. Int:</asp:Label>
        <input type="text" id="minIntText" style="font-family: 'Courier New'" />
        <br />
        <asp:Label runat="server" Font-Names="Courier New">Max. Int:</asp:Label>
        <input type="text" id="maxIntText" style="font-family: 'Courier New'" />
        <asp:Label runat="server" Font-Names="Courier New">Max. Int:</asp:Label>
        <asp:Label runat="server" Font-Names="Courier New">Count:</asp:Label>
        <input type="text" id="countText" style="font-family: 'Courier New'" />
        
    </div>
    <br />
    <div>
        <asp:Label runat="server" Font-Names="Courier New">Output:</asp:Label>
        <asp:TextBox ID="outputTextBox" runat="server" Height="200px" Width="250px" ReadOnly="True" TextMode="MultiLine"></asp:TextBox>
    </div>
</asp:Content>
