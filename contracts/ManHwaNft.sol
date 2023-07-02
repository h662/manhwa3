// SPDX-License-Identifier: MIT

pragma solidity ^0.8.18;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";

contract ManHwaNft is ERC721Enumerable {

    mapping(uint => string) metadataUris;

    constructor(string memory _name, string memory _symbol) ERC721(_name, _symbol) {
    }

    function mintNft(string memory _metadataUri) public {
        uint tokenId = totalSupply() + 1;

        _mint(msg.sender, tokenId);

        metadataUris[tokenId] = _metadataUri;
    }

    function tokenURI(uint _tokenId) public override view returns(string memory) {
        return metadataUris[_tokenId];
    }
}