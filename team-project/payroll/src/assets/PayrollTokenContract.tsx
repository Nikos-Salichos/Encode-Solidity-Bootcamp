export const payrollTokenContract = {
  "contractName": "PayrollToken",
  "abi": [
      {
          "inputs": [
              {
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
              },
              {
                  "internalType": "string",
                  "name": "symbol",
                  "type": "string"
              }
          ],
          "stateMutability": "nonpayable",
          "type": "constructor"
      },
      {
          "anonymous": false,
          "inputs": [
              {
                  "indexed": true,
                  "internalType": "address",
                  "name": "owner",
                  "type": "address"
              },
              {
                  "indexed": true,
                  "internalType": "address",
                  "name": "spender",
                  "type": "address"
              },
              {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "value",
                  "type": "uint256"
              }
          ],
          "name": "Approval",
          "type": "event"
      },
      {
          "anonymous": false,
          "inputs": [
              {
                  "indexed": true,
                  "internalType": "bytes32",
                  "name": "role",
                  "type": "bytes32"
              },
              {
                  "indexed": true,
                  "internalType": "bytes32",
                  "name": "previousAdminRole",
                  "type": "bytes32"
              },
              {
                  "indexed": true,
                  "internalType": "bytes32",
                  "name": "newAdminRole",
                  "type": "bytes32"
              }
          ],
          "name": "RoleAdminChanged",
          "type": "event"
      },
      {
          "anonymous": false,
          "inputs": [
              {
                  "indexed": true,
                  "internalType": "bytes32",
                  "name": "role",
                  "type": "bytes32"
              },
              {
                  "indexed": true,
                  "internalType": "address",
                  "name": "account",
                  "type": "address"
              },
              {
                  "indexed": true,
                  "internalType": "address",
                  "name": "sender",
                  "type": "address"
              }
          ],
          "name": "RoleGranted",
          "type": "event"
      },
      {
          "anonymous": false,
          "inputs": [
              {
                  "indexed": true,
                  "internalType": "bytes32",
                  "name": "role",
                  "type": "bytes32"
              },
              {
                  "indexed": true,
                  "internalType": "address",
                  "name": "account",
                  "type": "address"
              },
              {
                  "indexed": true,
                  "internalType": "address",
                  "name": "sender",
                  "type": "address"
              }
          ],
          "name": "RoleRevoked",
          "type": "event"
      },
      {
          "anonymous": false,
          "inputs": [
              {
                  "indexed": true,
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
              },
              {
                  "indexed": true,
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
              },
              {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "value",
                  "type": "uint256"
              }
          ],
          "name": "Transfer",
          "type": "event"
      },
      {
          "inputs": [],
          "name": "DEFAULT_ADMIN_ROLE",
          "outputs": [
              {
                  "internalType": "bytes32",
                  "name": "",
                  "type": "bytes32"
              }
          ],
          "stateMutability": "view",
          "type": "function"
      },
      {
          "inputs": [],
          "name": "MINTER_ROLE",
          "outputs": [
              {
                  "internalType": "bytes32",
                  "name": "",
                  "type": "bytes32"
              }
          ],
          "stateMutability": "view",
          "type": "function"
      },
      {
          "inputs": [
              {
                  "internalType": "address",
                  "name": "owner",
                  "type": "address"
              },
              {
                  "internalType": "address",
                  "name": "spender",
                  "type": "address"
              }
          ],
          "name": "allowance",
          "outputs": [
              {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
              }
          ],
          "stateMutability": "view",
          "type": "function"
      },
      {
          "inputs": [
              {
                  "internalType": "address",
                  "name": "spender",
                  "type": "address"
              },
              {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
              }
          ],
          "name": "approve",
          "outputs": [
              {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
              }
          ],
          "stateMutability": "nonpayable",
          "type": "function"
      },
      {
          "inputs": [
              {
                  "internalType": "address",
                  "name": "account",
                  "type": "address"
              }
          ],
          "name": "balanceOf",
          "outputs": [
              {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
              }
          ],
          "stateMutability": "view",
          "type": "function"
      },
      {
          "inputs": [
              {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
              }
          ],
          "name": "burn",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
      },
      {
          "inputs": [
              {
                  "internalType": "address",
                  "name": "account",
                  "type": "address"
              },
              {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
              }
          ],
          "name": "burnFrom",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
      },
      {
          "inputs": [],
          "name": "decimals",
          "outputs": [
              {
                  "internalType": "uint8",
                  "name": "",
                  "type": "uint8"
              }
          ],
          "stateMutability": "view",
          "type": "function"
      },
      {
          "inputs": [
              {
                  "internalType": "address",
                  "name": "spender",
                  "type": "address"
              },
              {
                  "internalType": "uint256",
                  "name": "subtractedValue",
                  "type": "uint256"
              }
          ],
          "name": "decreaseAllowance",
          "outputs": [
              {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
              }
          ],
          "stateMutability": "nonpayable",
          "type": "function"
      },
      {
          "inputs": [
              {
                  "internalType": "bytes32",
                  "name": "role",
                  "type": "bytes32"
              }
          ],
          "name": "getRoleAdmin",
          "outputs": [
              {
                  "internalType": "bytes32",
                  "name": "",
                  "type": "bytes32"
              }
          ],
          "stateMutability": "view",
          "type": "function"
      },
      {
          "inputs": [
              {
                  "internalType": "bytes32",
                  "name": "role",
                  "type": "bytes32"
              },
              {
                  "internalType": "address",
                  "name": "account",
                  "type": "address"
              }
          ],
          "name": "grantRole",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
      },
      {
          "inputs": [
              {
                  "internalType": "bytes32",
                  "name": "role",
                  "type": "bytes32"
              },
              {
                  "internalType": "address",
                  "name": "account",
                  "type": "address"
              }
          ],
          "name": "hasRole",
          "outputs": [
              {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
              }
          ],
          "stateMutability": "view",
          "type": "function"
      },
      {
          "inputs": [
              {
                  "internalType": "address",
                  "name": "spender",
                  "type": "address"
              },
              {
                  "internalType": "uint256",
                  "name": "addedValue",
                  "type": "uint256"
              }
          ],
          "name": "increaseAllowance",
          "outputs": [
              {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
              }
          ],
          "stateMutability": "nonpayable",
          "type": "function"
      },
      {
          "inputs": [
              {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
              },
              {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
              }
          ],
          "name": "mint",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
      },
      {
          "inputs": [],
          "name": "name",
          "outputs": [
              {
                  "internalType": "string",
                  "name": "",
                  "type": "string"
              }
          ],
          "stateMutability": "view",
          "type": "function"
      },
      {
          "inputs": [
              {
                  "internalType": "bytes32",
                  "name": "role",
                  "type": "bytes32"
              },
              {
                  "internalType": "address",
                  "name": "account",
                  "type": "address"
              }
          ],
          "name": "renounceRole",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
      },
      {
          "inputs": [
              {
                  "internalType": "bytes32",
                  "name": "role",
                  "type": "bytes32"
              },
              {
                  "internalType": "address",
                  "name": "account",
                  "type": "address"
              }
          ],
          "name": "revokeRole",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
      },
      {
          "inputs": [
              {
                  "internalType": "bytes4",
                  "name": "interfaceId",
                  "type": "bytes4"
              }
          ],
          "name": "supportsInterface",
          "outputs": [
              {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
              }
          ],
          "stateMutability": "view",
          "type": "function"
      },
      {
          "inputs": [],
          "name": "symbol",
          "outputs": [
              {
                  "internalType": "string",
                  "name": "",
                  "type": "string"
              }
          ],
          "stateMutability": "view",
          "type": "function"
      },
      {
          "inputs": [],
          "name": "totalSupply",
          "outputs": [
              {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
              }
          ],
          "stateMutability": "view",
          "type": "function"
      },
      {
          "inputs": [
              {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
              },
              {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
              }
          ],
          "name": "transfer",
          "outputs": [
              {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
              }
          ],
          "stateMutability": "nonpayable",
          "type": "function"
      },
      {
          "inputs": [
              {
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
              },
              {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
              },
              {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
              }
          ],
          "name": "transferFrom",
          "outputs": [
              {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
              }
          ],
          "stateMutability": "nonpayable",
          "type": "function"
      }
  ],
  "metadata": "{\"compiler\":{\"version\":\"0.8.16+commit.07a7930e\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"symbol\",\"type\":\"string\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"previousAdminRole\",\"type\":\"bytes32\"},{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"newAdminRole\",\"type\":\"bytes32\"}],\"name\":\"RoleAdminChanged\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"}],\"name\":\"RoleGranted\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"}],\"name\":\"RoleRevoked\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"DEFAULT_ADMIN_ROLE\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"MINTER_ROLE\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"burn\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"burnFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"subtractedValue\",\"type\":\"uint256\"}],\"name\":\"decreaseAllowance\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"}],\"name\":\"getRoleAdmin\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"grantRole\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"hasRole\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"addedValue\",\"type\":\"uint256\"}],\"name\":\"increaseAllowance\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"mint\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"renounceRole\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"revokeRole\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"interfaceId\",\"type\":\"bytes4\"}],\"name\":\"supportsInterface\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{\"allowance(address,address)\":{\"details\":\"See {IERC20-allowance}.\"},\"approve(address,uint256)\":{\"details\":\"See {IERC20-approve}. NOTE: If `amount` is the maximum `uint256`, the allowance is not updated on `transferFrom`. This is semantically equivalent to an infinite approval. Requirements: - `spender` cannot be the zero address.\"},\"balanceOf(address)\":{\"details\":\"See {IERC20-balanceOf}.\"},\"burn(uint256)\":{\"details\":\"Destroys `amount` tokens from the caller. See {ERC20-_burn}.\"},\"burnFrom(address,uint256)\":{\"details\":\"Destroys `amount` tokens from `account`, deducting from the caller's allowance. See {ERC20-_burn} and {ERC20-allowance}. Requirements: - the caller must have allowance for ``accounts``'s tokens of at least `amount`.\"},\"decimals()\":{\"details\":\"Returns the number of decimals used to get its user representation. For example, if `decimals` equals `2`, a balance of `505` tokens should be displayed to a user as `5.05` (`505 / 10 ** 2`). Tokens usually opt for a value of 18, imitating the relationship between Ether and Wei. This is the value {ERC20} uses, unless this function is overridden; NOTE: This information is only used for _display_ purposes: it in no way affects any of the arithmetic of the contract, including {IERC20-balanceOf} and {IERC20-transfer}.\"},\"decreaseAllowance(address,uint256)\":{\"details\":\"Atomically decreases the allowance granted to `spender` by the caller. This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}. Emits an {Approval} event indicating the updated allowance. Requirements: - `spender` cannot be the zero address. - `spender` must have allowance for the caller of at least `subtractedValue`.\"},\"getRoleAdmin(bytes32)\":{\"details\":\"Returns the admin role that controls `role`. See {grantRole} and {revokeRole}. To change a role's admin, use {_setRoleAdmin}.\"},\"grantRole(bytes32,address)\":{\"details\":\"Grants `role` to `account`. If `account` had not been already granted `role`, emits a {RoleGranted} event. Requirements: - the caller must have ``role``'s admin role. May emit a {RoleGranted} event.\"},\"hasRole(bytes32,address)\":{\"details\":\"Returns `true` if `account` has been granted `role`.\"},\"increaseAllowance(address,uint256)\":{\"details\":\"Atomically increases the allowance granted to `spender` by the caller. This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}. Emits an {Approval} event indicating the updated allowance. Requirements: - `spender` cannot be the zero address.\"},\"name()\":{\"details\":\"Returns the name of the token.\"},\"renounceRole(bytes32,address)\":{\"details\":\"Revokes `role` from the calling account. Roles are often managed via {grantRole} and {revokeRole}: this function's purpose is to provide a mechanism for accounts to lose their privileges if they are compromised (such as when a trusted device is misplaced). If the calling account had been revoked `role`, emits a {RoleRevoked} event. Requirements: - the caller must be `account`. May emit a {RoleRevoked} event.\"},\"revokeRole(bytes32,address)\":{\"details\":\"Revokes `role` from `account`. If `account` had been granted `role`, emits a {RoleRevoked} event. Requirements: - the caller must have ``role``'s admin role. May emit a {RoleRevoked} event.\"},\"supportsInterface(bytes4)\":{\"details\":\"See {IERC165-supportsInterface}.\"},\"symbol()\":{\"details\":\"Returns the symbol of the token, usually a shorter version of the name.\"},\"totalSupply()\":{\"details\":\"See {IERC20-totalSupply}.\"},\"transfer(address,uint256)\":{\"details\":\"See {IERC20-transfer}. Requirements: - `to` cannot be the zero address. - the caller must have a balance of at least `amount`.\"},\"transferFrom(address,address,uint256)\":{\"details\":\"See {IERC20-transferFrom}. Emits an {Approval} event indicating the updated allowance. This is not required by the EIP. See the note at the beginning of {ERC20}. NOTE: Does not update the allowance if the current allowance is the maximum `uint256`. Requirements: - `from` and `to` cannot be the zero address. - `from` must have a balance of at least `amount`. - the caller must have allowance for ``from``'s tokens of at least `amount`.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"c:/Users/Nikos/Desktop/SolidityBootcamp/Encode-Solidity-Bootcamp-Weekend-Projects/team-project/payroll/contracts/Payroll.sol\":\"PayrollToken\"},\"evmVersion\":\"london\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[]},\"sources\":{\"c:/Users/Nikos/Desktop/SolidityBootcamp/Encode-Solidity-Bootcamp-Weekend-Projects/team-project/payroll/contracts/Payroll.sol\":{\"keccak256\":\"0x100e36dd9be3ce99670f2e91c4295724f990b65897569c1eab9b310d58b2effa\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://1797de4532d1024160b4d2ca77641a5a09fd256b3fe59cebc3ff4f2128674b37\",\"dweb:/ipfs/QmYdMvNnagUTCfc6UtniNYbK3v44Qxis9sNFPmGuszDMGm\"]},\"c:/Users/Nikos/Desktop/SolidityBootcamp/Encode-Solidity-Bootcamp-Weekend-Projects/team-project/payroll/node_modules/@openzeppelin/contracts/access/AccessControl.sol\":{\"keccak256\":\"0x5b35d8e68aeaccc685239bd9dd79b9ba01a0357930f8a3307ab85511733d9724\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://ba8eb2d22f9321bd4660f6617c181d9611ff30a9b089408b8c6e2216d6d5cdc5\",\"dweb:/ipfs/QmTSJvhjHfnUV1j4hsqDv8PmLvGBLRs9gHLjTUXrUJ5Y9q\"]},\"c:/Users/Nikos/Desktop/SolidityBootcamp/Encode-Solidity-Bootcamp-Weekend-Projects/team-project/payroll/node_modules/@openzeppelin/contracts/access/IAccessControl.sol\":{\"keccak256\":\"0x59ce320a585d7e1f163cd70390a0ef2ff9cec832e2aa544293a00692465a7a57\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://bb2c137c343ef0c4c7ce7b18c1d108afdc9d315a04e48307288d2d05adcbde3a\",\"dweb:/ipfs/QmUxhrAQM3MM3FF5j7AtcXLXguWCJBHJ14BRdVtuoQc8Fh\"]},\"c:/Users/Nikos/Desktop/SolidityBootcamp/Encode-Solidity-Bootcamp-Weekend-Projects/team-project/payroll/node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol\":{\"keccak256\":\"0x24b04b8aacaaf1a4a0719117b29c9c3647b1f479c5ac2a60f5ff1bb6d839c238\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://43e46da9d9f49741ecd876a269e71bc7494058d7a8e9478429998adb5bc3eaa0\",\"dweb:/ipfs/QmUtp4cqzf22C5rJ76AabKADquGWcjsc33yjYXxXC4sDvy\"]},\"c:/Users/Nikos/Desktop/SolidityBootcamp/Encode-Solidity-Bootcamp-Weekend-Projects/team-project/payroll/node_modules/@openzeppelin/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0x9750c6b834f7b43000631af5cc30001c5f547b3ceb3635488f140f60e897ea6b\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://5a7d5b1ef5d8d5889ad2ed89d8619c09383b80b72ab226e0fe7bde1636481e34\",\"dweb:/ipfs/QmebXWgtEfumQGBdVeM6c71McLixYXQP5Bk6kKXuoY4Bmr\"]},\"c:/Users/Nikos/Desktop/SolidityBootcamp/Encode-Solidity-Bootcamp-Weekend-Projects/team-project/payroll/node_modules/@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol\":{\"keccak256\":\"0x0d19410453cda55960a818e02bd7c18952a5c8fe7a3036e81f0d599f34487a7b\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://4c0f62d3d5bef22b5ca00cc3903e7de6152cb68d2d22401a463f373cda54c00f\",\"dweb:/ipfs/QmSfzjZux7LC7NW2f7rjCXTHeFMUCWERqDkhpCTBy7kxTe\"]},\"c:/Users/Nikos/Desktop/SolidityBootcamp/Encode-Solidity-Bootcamp-Weekend-Projects/team-project/payroll/node_modules/@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.sol\":{\"keccak256\":\"0x8de418a5503946cabe331f35fe242d3201a73f67f77aaeb7110acb1f30423aca\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://5a376d3dda2cb70536c0a45c208b29b34ac560c4cb4f513a42079f96ba47d2dd\",\"dweb:/ipfs/QmZQg6gn1sUpM8wHzwNvSnihumUCAhxD119MpXeKp8B9s8\"]},\"c:/Users/Nikos/Desktop/SolidityBootcamp/Encode-Solidity-Bootcamp-Weekend-Projects/team-project/payroll/node_modules/@openzeppelin/contracts/utils/Context.sol\":{\"keccak256\":\"0xe2e337e6dde9ef6b680e07338c493ebea1b5fd09b43424112868e9cc1706bca7\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6df0ddf21ce9f58271bdfaa85cde98b200ef242a05a3f85c2bc10a8294800a92\",\"dweb:/ipfs/QmRK2Y5Yc6BK7tGKkgsgn3aJEQGi5aakeSPZvS65PV8Xp3\"]},\"c:/Users/Nikos/Desktop/SolidityBootcamp/Encode-Solidity-Bootcamp-Weekend-Projects/team-project/payroll/node_modules/@openzeppelin/contracts/utils/Strings.sol\":{\"keccak256\":\"0xaf159a8b1923ad2a26d516089bceca9bdeaeacd04be50983ea00ba63070f08a3\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6f2cf1c531122bc7ca96b8c8db6a60deae60441e5223065e792553d4849b5638\",\"dweb:/ipfs/QmPBdJmBBABMDCfyDjCbdxgiqRavgiSL88SYPGibgbPas9\"]},\"c:/Users/Nikos/Desktop/SolidityBootcamp/Encode-Solidity-Bootcamp-Weekend-Projects/team-project/payroll/node_modules/@openzeppelin/contracts/utils/introspection/ERC165.sol\":{\"keccak256\":\"0xd10975de010d89fd1c78dc5e8a9a7e7f496198085c151648f20cba166b32582b\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://fb0048dee081f6fffa5f74afc3fb328483c2a30504e94a0ddd2a5114d731ec4d\",\"dweb:/ipfs/QmZptt1nmYoA5SgjwnSgWqgUSDgm4q52Yos3xhnMv3MV43\"]},\"c:/Users/Nikos/Desktop/SolidityBootcamp/Encode-Solidity-Bootcamp-Weekend-Projects/team-project/payroll/node_modules/@openzeppelin/contracts/utils/introspection/IERC165.sol\":{\"keccak256\":\"0x447a5f3ddc18419d41ff92b3773fb86471b1db25773e07f877f548918a185bf1\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://be161e54f24e5c6fae81a12db1a8ae87bc5ae1b0ddc805d82a1440a68455088f\",\"dweb:/ipfs/QmP7C3CHdY9urF4dEMb9wmsp1wMxHF6nhA2yQE5SKiPAdy\"]}},\"version\":1}",
  "bytecode": "60806040523480156200001157600080fd5b50604051620015dd380380620015dd833981016040819052620000349162000203565b81816003620000448382620002fc565b506004620000538282620002fc565b50620000659150600090503362000099565b620000917f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a63362000099565b5050620003c8565b60008281526005602090815260408083206001600160a01b038516845290915290205460ff166200013a5760008281526005602090815260408083206001600160a01b03851684529091529020805460ff19166001179055620000f93390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45b5050565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200016657600080fd5b81516001600160401b03808211156200018357620001836200013e565b604051601f8301601f19908116603f01168101908282118183101715620001ae57620001ae6200013e565b81604052838152602092508683858801011115620001cb57600080fd5b600091505b83821015620001ef5785820183015181830184015290820190620001d0565b600093810190920192909252949350505050565b600080604083850312156200021757600080fd5b82516001600160401b03808211156200022f57600080fd5b6200023d8683870162000154565b935060208501519150808211156200025457600080fd5b50620002638582860162000154565b9150509250929050565b600181811c908216806200028257607f821691505b602082108103620002a357634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115620002f757600081815260208120601f850160051c81016020861015620002d25750805b601f850160051c820191505b81811015620002f357828155600101620002de565b5050505b505050565b81516001600160401b038111156200031857620003186200013e565b62000330816200032984546200026d565b84620002a9565b602080601f8311600181146200036857600084156200034f5750858301515b600019600386901b1c1916600185901b178555620002f3565b600085815260208120601f198616915b82811015620003995788860151825594840194600190910190840162000378565b5085821015620003b85787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b61120580620003d86000396000f3fe608060405234801561001057600080fd5b50600436106101425760003560e01c806342966c68116100b8578063a217fddf1161007c578063a217fddf146102a6578063a457c2d7146102ae578063a9059cbb146102c1578063d5391393146102d4578063d547741f146102fb578063dd62ed3e1461030e57600080fd5b806342966c681461023c57806370a082311461024f57806379cc67901461027857806391d148541461028b57806395d89b411461029e57600080fd5b8063248a9ca31161010a578063248a9ca3146101bc5780632f2ff15d146101df578063313ce567146101f457806336568abe14610203578063395093511461021657806340c10f191461022957600080fd5b806301ffc9a71461014757806306fdde031461016f578063095ea7b31461018457806318160ddd1461019757806323b872dd146101a9575b600080fd5b61015a610155366004610ef5565b610321565b60405190151581526020015b60405180910390f35b610177610358565b6040516101669190610f43565b61015a610192366004610f92565b6103ea565b6002545b604051908152602001610166565b61015a6101b7366004610fbc565b610402565b61019b6101ca366004610ff8565b60009081526005602052604090206001015490565b6101f26101ed366004611011565b610426565b005b60405160128152602001610166565b6101f2610211366004611011565b610450565b61015a610224366004610f92565b6104d3565b6101f2610237366004610f92565b6104f5565b6101f261024a366004610ff8565b610529565b61019b61025d36600461103d565b6001600160a01b031660009081526020819052604090205490565b6101f2610286366004610f92565b610536565b61015a610299366004611011565b61054b565b610177610576565b61019b600081565b61015a6102bc366004610f92565b610585565b61015a6102cf366004610f92565b610600565b61019b7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a681565b6101f2610309366004611011565b61060e565b61019b61031c366004611058565b610633565b60006001600160e01b03198216637965db0b60e01b148061035257506301ffc9a760e01b6001600160e01b03198316145b92915050565b60606003805461036790611082565b80601f016020809104026020016040519081016040528092919081815260200182805461039390611082565b80156103e05780601f106103b5576101008083540402835291602001916103e0565b820191906000526020600020905b8154815290600101906020018083116103c357829003601f168201915b5050505050905090565b6000336103f881858561065e565b5060019392505050565b600033610410858285610782565b61041b8585856107fc565b506001949350505050565b600082815260056020526040902060010154610441816109ca565b61044b83836109d4565b505050565b6001600160a01b03811633146104c55760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b60648201526084015b60405180910390fd5b6104cf8282610a5a565b5050565b6000336103f88185856104e68383610633565b6104f091906110d2565b61065e565b7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a661051f816109ca565b61044b8383610ac1565b6105333382610ba0565b50565b610541823383610782565b6104cf8282610ba0565b60009182526005602090815260408084206001600160a01b0393909316845291905290205460ff1690565b60606004805461036790611082565b600033816105938286610633565b9050838110156105f35760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084016104bc565b61041b828686840361065e565b6000336103f88185856107fc565b600082815260056020526040902060010154610629816109ca565b61044b8383610a5a565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6001600160a01b0383166106c05760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b60648201526084016104bc565b6001600160a01b0382166107215760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b60648201526084016104bc565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b600061078e8484610633565b905060001981146107f657818110156107e95760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e636500000060448201526064016104bc565b6107f6848484840361065e565b50505050565b6001600160a01b0383166108605760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b60648201526084016104bc565b6001600160a01b0382166108c25760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b60648201526084016104bc565b6001600160a01b0383166000908152602081905260409020548181101561093a5760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b60648201526084016104bc565b6001600160a01b038085166000908152602081905260408082208585039055918516815290812080548492906109719084906110d2565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516109bd91815260200190565b60405180910390a36107f6565b6105338133610cee565b6109de828261054b565b6104cf5760008281526005602090815260408083206001600160a01b03851684529091529020805460ff19166001179055610a163390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b610a64828261054b565b156104cf5760008281526005602090815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b6001600160a01b038216610b175760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f20616464726573730060448201526064016104bc565b8060026000828254610b2991906110d2565b90915550506001600160a01b03821660009081526020819052604081208054839290610b569084906110d2565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b6001600160a01b038216610c005760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b60648201526084016104bc565b6001600160a01b03821660009081526020819052604090205481811015610c745760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b60648201526084016104bc565b6001600160a01b0383166000908152602081905260408120838303905560028054849290610ca39084906110e5565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a3505050565b610cf8828261054b565b6104cf57610d10816001600160a01b03166014610d52565b610d1b836020610d52565b604051602001610d2c9291906110f8565b60408051601f198184030181529082905262461bcd60e51b82526104bc91600401610f43565b60606000610d6183600261116d565b610d6c9060026110d2565b67ffffffffffffffff811115610d8457610d8461118c565b6040519080825280601f01601f191660200182016040528015610dae576020820181803683370190505b509050600360fc1b81600081518110610dc957610dc96111a2565b60200101906001600160f81b031916908160001a905350600f60fb1b81600181518110610df857610df86111a2565b60200101906001600160f81b031916908160001a9053506000610e1c84600261116d565b610e279060016110d2565b90505b6001811115610e9f576f181899199a1a9b1b9c1cb0b131b232b360811b85600f1660108110610e5b57610e5b6111a2565b1a60f81b828281518110610e7157610e716111a2565b60200101906001600160f81b031916908160001a90535060049490941c93610e98816111b8565b9050610e2a565b508315610eee5760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e7460448201526064016104bc565b9392505050565b600060208284031215610f0757600080fd5b81356001600160e01b031981168114610eee57600080fd5b60005b83811015610f3a578181015183820152602001610f22565b50506000910152565b6020815260008251806020840152610f62816040850160208701610f1f565b601f01601f19169190910160400192915050565b80356001600160a01b0381168114610f8d57600080fd5b919050565b60008060408385031215610fa557600080fd5b610fae83610f76565b946020939093013593505050565b600080600060608486031215610fd157600080fd5b610fda84610f76565b9250610fe860208501610f76565b9150604084013590509250925092565b60006020828403121561100a57600080fd5b5035919050565b6000806040838503121561102457600080fd5b8235915061103460208401610f76565b90509250929050565b60006020828403121561104f57600080fd5b610eee82610f76565b6000806040838503121561106b57600080fd5b61107483610f76565b915061103460208401610f76565b600181811c9082168061109657607f821691505b6020821081036110b657634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b80820180821115610352576103526110bc565b81810381811115610352576103526110bc565b7f416363657373436f6e74726f6c3a206163636f756e7420000000000000000000815260008351611130816017850160208801610f1f565b7001034b99036b4b9b9b4b733903937b6329607d1b6017918401918201528351611161816028840160208801610f1f565b01602801949350505050565b6000816000190483118215151615611187576111876110bc565b500290565b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b6000816111c7576111c76110bc565b50600019019056fea264697066735822122085703a33c2678c08a5f03b94b78482a97c18e67a7c5a37ef7a40207a2c833ea464736f6c63430008100033",
  "deployedBytecode": "608060405234801561001057600080fd5b50600436106101425760003560e01c806342966c68116100b8578063a217fddf1161007c578063a217fddf146102a6578063a457c2d7146102ae578063a9059cbb146102c1578063d5391393146102d4578063d547741f146102fb578063dd62ed3e1461030e57600080fd5b806342966c681461023c57806370a082311461024f57806379cc67901461027857806391d148541461028b57806395d89b411461029e57600080fd5b8063248a9ca31161010a578063248a9ca3146101bc5780632f2ff15d146101df578063313ce567146101f457806336568abe14610203578063395093511461021657806340c10f191461022957600080fd5b806301ffc9a71461014757806306fdde031461016f578063095ea7b31461018457806318160ddd1461019757806323b872dd146101a9575b600080fd5b61015a610155366004610ef5565b610321565b60405190151581526020015b60405180910390f35b610177610358565b6040516101669190610f43565b61015a610192366004610f92565b6103ea565b6002545b604051908152602001610166565b61015a6101b7366004610fbc565b610402565b61019b6101ca366004610ff8565b60009081526005602052604090206001015490565b6101f26101ed366004611011565b610426565b005b60405160128152602001610166565b6101f2610211366004611011565b610450565b61015a610224366004610f92565b6104d3565b6101f2610237366004610f92565b6104f5565b6101f261024a366004610ff8565b610529565b61019b61025d36600461103d565b6001600160a01b031660009081526020819052604090205490565b6101f2610286366004610f92565b610536565b61015a610299366004611011565b61054b565b610177610576565b61019b600081565b61015a6102bc366004610f92565b610585565b61015a6102cf366004610f92565b610600565b61019b7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a681565b6101f2610309366004611011565b61060e565b61019b61031c366004611058565b610633565b60006001600160e01b03198216637965db0b60e01b148061035257506301ffc9a760e01b6001600160e01b03198316145b92915050565b60606003805461036790611082565b80601f016020809104026020016040519081016040528092919081815260200182805461039390611082565b80156103e05780601f106103b5576101008083540402835291602001916103e0565b820191906000526020600020905b8154815290600101906020018083116103c357829003601f168201915b5050505050905090565b6000336103f881858561065e565b5060019392505050565b600033610410858285610782565b61041b8585856107fc565b506001949350505050565b600082815260056020526040902060010154610441816109ca565b61044b83836109d4565b505050565b6001600160a01b03811633146104c55760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b60648201526084015b60405180910390fd5b6104cf8282610a5a565b5050565b6000336103f88185856104e68383610633565b6104f091906110d2565b61065e565b7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a661051f816109ca565b61044b8383610ac1565b6105333382610ba0565b50565b610541823383610782565b6104cf8282610ba0565b60009182526005602090815260408084206001600160a01b0393909316845291905290205460ff1690565b60606004805461036790611082565b600033816105938286610633565b9050838110156105f35760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084016104bc565b61041b828686840361065e565b6000336103f88185856107fc565b600082815260056020526040902060010154610629816109ca565b61044b8383610a5a565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6001600160a01b0383166106c05760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b60648201526084016104bc565b6001600160a01b0382166107215760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b60648201526084016104bc565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b600061078e8484610633565b905060001981146107f657818110156107e95760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e636500000060448201526064016104bc565b6107f6848484840361065e565b50505050565b6001600160a01b0383166108605760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b60648201526084016104bc565b6001600160a01b0382166108c25760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b60648201526084016104bc565b6001600160a01b0383166000908152602081905260409020548181101561093a5760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b60648201526084016104bc565b6001600160a01b038085166000908152602081905260408082208585039055918516815290812080548492906109719084906110d2565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516109bd91815260200190565b60405180910390a36107f6565b6105338133610cee565b6109de828261054b565b6104cf5760008281526005602090815260408083206001600160a01b03851684529091529020805460ff19166001179055610a163390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b610a64828261054b565b156104cf5760008281526005602090815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b6001600160a01b038216610b175760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f20616464726573730060448201526064016104bc565b8060026000828254610b2991906110d2565b90915550506001600160a01b03821660009081526020819052604081208054839290610b569084906110d2565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b6001600160a01b038216610c005760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b60648201526084016104bc565b6001600160a01b03821660009081526020819052604090205481811015610c745760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b60648201526084016104bc565b6001600160a01b0383166000908152602081905260408120838303905560028054849290610ca39084906110e5565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a3505050565b610cf8828261054b565b6104cf57610d10816001600160a01b03166014610d52565b610d1b836020610d52565b604051602001610d2c9291906110f8565b60408051601f198184030181529082905262461bcd60e51b82526104bc91600401610f43565b60606000610d6183600261116d565b610d6c9060026110d2565b67ffffffffffffffff811115610d8457610d8461118c565b6040519080825280601f01601f191660200182016040528015610dae576020820181803683370190505b509050600360fc1b81600081518110610dc957610dc96111a2565b60200101906001600160f81b031916908160001a905350600f60fb1b81600181518110610df857610df86111a2565b60200101906001600160f81b031916908160001a9053506000610e1c84600261116d565b610e279060016110d2565b90505b6001811115610e9f576f181899199a1a9b1b9c1cb0b131b232b360811b85600f1660108110610e5b57610e5b6111a2565b1a60f81b828281518110610e7157610e716111a2565b60200101906001600160f81b031916908160001a90535060049490941c93610e98816111b8565b9050610e2a565b508315610eee5760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e7460448201526064016104bc565b9392505050565b600060208284031215610f0757600080fd5b81356001600160e01b031981168114610eee57600080fd5b60005b83811015610f3a578181015183820152602001610f22565b50506000910152565b6020815260008251806020840152610f62816040850160208701610f1f565b601f01601f19169190910160400192915050565b80356001600160a01b0381168114610f8d57600080fd5b919050565b60008060408385031215610fa557600080fd5b610fae83610f76565b946020939093013593505050565b600080600060608486031215610fd157600080fd5b610fda84610f76565b9250610fe860208501610f76565b9150604084013590509250925092565b60006020828403121561100a57600080fd5b5035919050565b6000806040838503121561102457600080fd5b8235915061103460208401610f76565b90509250929050565b60006020828403121561104f57600080fd5b610eee82610f76565b6000806040838503121561106b57600080fd5b61107483610f76565b915061103460208401610f76565b600181811c9082168061109657607f821691505b6020821081036110b657634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b80820180821115610352576103526110bc565b81810381811115610352576103526110bc565b7f416363657373436f6e74726f6c3a206163636f756e7420000000000000000000815260008351611130816017850160208801610f1f565b7001034b99036b4b9b9b4b733903937b6329607d1b6017918401918201528351611161816028840160208801610f1f565b01602801949350505050565b6000816000190483118215151615611187576111876110bc565b500290565b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b6000816111c7576111c76110bc565b50600019019056fea264697066735822122085703a33c2678c08a5f03b94b78482a97c18e67a7c5a37ef7a40207a2c833ea464736f6c63430008100033",
  "sourceMap": "610:441:0:-:0;;;752:181;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;812:4;818:6;2044:5:3;:13;812:4:0;2044:5:3;:13;:::i;:::-;-1:-1:-1;2067:7:3;:17;2077:7;2067;:17;:::i;:::-;-1:-1:-1;837:42:0::1;::::0;-1:-1:-1;2072:4:1::1;::::0;-1:-1:-1;868:10:0::1;837;:42::i;:::-;890:35;719:24;914:10;890;:35::i;:::-;752:181:::0;;610:441;;7474:233:1;2981:4;3004:12;;;:6;:12;;;;;;;;-1:-1:-1;;;;;3004:29:1;;;;;;;;;;;;7552:149;;7595:12;;;;:6;:12;;;;;;;;-1:-1:-1;;;;;7595:29:1;;;;;;;;;:36;;-1:-1:-1;;7595:36:1;7627:4;7595:36;;;7677:12;719:10:7;;640:96;7677:12:1;-1:-1:-1;;;;;7650:40:1;7668:7;-1:-1:-1;;;;;7650:40:1;7662:4;7650:40;;;;;;;;;;7552:149;7474:233;;:::o;14:127:11:-;75:10;70:3;66:20;63:1;56:31;106:4;103:1;96:15;130:4;127:1;120:15;146:840;200:5;253:3;246:4;238:6;234:17;230:27;220:55;;271:1;268;261:12;220:55;294:13;;-1:-1:-1;;;;;356:10:11;;;353:36;;;369:18;;:::i;:::-;444:2;438:9;412:2;498:13;;-1:-1:-1;;494:22:11;;;518:2;490:31;486:40;474:53;;;542:18;;;562:22;;;539:46;536:72;;;588:18;;:::i;:::-;628:10;624:2;617:22;663:2;655:6;648:18;685:4;675:14;;730:3;725:2;720;712:6;708:15;704:24;701:33;698:53;;;747:1;744;737:12;698:53;769:1;760:10;;779:133;793:2;790:1;787:9;779:133;;;881:14;;;877:23;;871:30;850:14;;;846:23;;839:63;804:10;;;;779:133;;;954:1;932:15;;;928:24;;;921:35;;;;936:6;146:840;-1:-1:-1;;;;146:840:11:o;991:562::-;1090:6;1098;1151:2;1139:9;1130:7;1126:23;1122:32;1119:52;;;1167:1;1164;1157:12;1119:52;1194:16;;-1:-1:-1;;;;;1259:14:11;;;1256:34;;;1286:1;1283;1276:12;1256:34;1309:61;1362:7;1353:6;1342:9;1338:22;1309:61;:::i;:::-;1299:71;;1416:2;1405:9;1401:18;1395:25;1379:41;;1445:2;1435:8;1432:16;1429:36;;;1461:1;1458;1451:12;1429:36;;1484:63;1539:7;1528:8;1517:9;1513:24;1484:63;:::i;:::-;1474:73;;;991:562;;;;;:::o;1558:380::-;1637:1;1633:12;;;;1680;;;1701:61;;1755:4;1747:6;1743:17;1733:27;;1701:61;1808:2;1800:6;1797:14;1777:18;1774:38;1771:161;;1854:10;1849:3;1845:20;1842:1;1835:31;1889:4;1886:1;1879:15;1917:4;1914:1;1907:15;1771:161;;1558:380;;;:::o;2069:545::-;2171:2;2166:3;2163:11;2160:448;;;2207:1;2232:5;2228:2;2221:17;2277:4;2273:2;2263:19;2347:2;2335:10;2331:19;2328:1;2324:27;2318:4;2314:38;2383:4;2371:10;2368:20;2365:47;;;-1:-1:-1;2406:4:11;2365:47;2461:2;2456:3;2452:12;2449:1;2445:20;2439:4;2435:31;2425:41;;2516:82;2534:2;2527:5;2524:13;2516:82;;;2579:17;;;2560:1;2549:13;2516:82;;;2520:3;;;2160:448;2069:545;;;:::o;2790:1352::-;2910:10;;-1:-1:-1;;;;;2932:30:11;;2929:56;;;2965:18;;:::i;:::-;2994:97;3084:6;3044:38;3076:4;3070:11;3044:38;:::i;:::-;3038:4;2994:97;:::i;:::-;3146:4;;3210:2;3199:14;;3227:1;3222:663;;;;3929:1;3946:6;3943:89;;;-1:-1:-1;3998:19:11;;;3992:26;3943:89;-1:-1:-1;;2747:1:11;2743:11;;;2739:24;2735:29;2725:40;2771:1;2767:11;;;2722:57;4045:81;;3192:944;;3222:663;2016:1;2009:14;;;2053:4;2040:18;;-1:-1:-1;;3258:20:11;;;3376:236;3390:7;3387:1;3384:14;3376:236;;;3479:19;;;3473:26;3458:42;;3571:27;;;;3539:1;3527:14;;;;3406:19;;3376:236;;;3380:3;3640:6;3631:7;3628:19;3625:201;;;3701:19;;;3695:26;-1:-1:-1;;3784:1:11;3780:14;;;3796:3;3776:24;3772:37;3768:42;3753:58;3738:74;;3625:201;-1:-1:-1;;;;;3872:1:11;3856:14;;;3852:22;3839:36;;-1:-1:-1;2790:1352:11:o;:::-;610:441:0;;;;;;",
  "deployedSourceMap": "610:441:0:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2606:202:1;;;;;;:::i;:::-;;:::i;:::-;;;470:14:11;;463:22;445:41;;433:2;418:18;2606:202:1;;;;;;;;2156:98:3;;;:::i;:::-;;;;;;;:::i;4433:197::-;;;;;;:::i;:::-;;:::i;3244:106::-;3331:12;;3244:106;;;1736:25:11;;;1724:2;1709:18;3244:106:3;1590:177:11;5192:286:3;;;;;;:::i;:::-;;:::i;4391:129:1:-;;;;;;:::i;:::-;4465:7;4491:12;;;:6;:12;;;;;:22;;;;4391:129;4816:145;;;;;;:::i;:::-;;:::i;:::-;;3093:91:3;;;3175:2;2873:36:11;;2861:2;2846:18;3093:91:3;2731:184:11;5925:214:1;;;;;;:::i;:::-;;:::i;5873:234:3:-;;;;;;:::i;:::-;;:::i;941:107:0:-;;;;;;:::i;:::-;;:::i;578:89:5:-;;;;;;:::i;:::-;;:::i;3408:125:3:-;;;;;;:::i;:::-;-1:-1:-1;;;;;3508:18:3;3482:7;3508:18;;;;;;;;;;;;3408:125;973:161:5;;;;;;:::i;:::-;;:::i;2895:145:1:-;;;;;;:::i;:::-;;:::i;2367:102:3:-;;;:::i;2027:49:1:-;;2072:4;2027:49;;6594:427:3;;;;;;:::i;:::-;;:::i;3729:189::-;;;;;;:::i;:::-;;:::i;681:62:0:-;;719:24;681:62;;5241:147:1;;;;;;:::i;:::-;;:::i;3976:149:3:-;;;;;;:::i;:::-;;:::i;2606:202:1:-;2691:4;-1:-1:-1;;;;;;2714:47:1;;-1:-1:-1;;;2714:47:1;;:87;;-1:-1:-1;;;;;;;;;;937:40:9;;;2765:36:1;2707:94;2606:202;-1:-1:-1;;2606:202:1:o;2156:98:3:-;2210:13;2242:5;2235:12;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2156:98;:::o;4433:197::-;4516:4;719:10:7;4570:32:3;719:10:7;4586:7:3;4595:6;4570:8;:32::i;:::-;-1:-1:-1;4619:4:3;;4433:197;-1:-1:-1;;;4433:197:3:o;5192:286::-;5319:4;719:10:7;5375:38:3;5391:4;719:10:7;5406:6:3;5375:15;:38::i;:::-;5423:27;5433:4;5439:2;5443:6;5423:9;:27::i;:::-;-1:-1:-1;5467:4:3;;5192:286;-1:-1:-1;;;;5192:286:3:o;4816:145:1:-;4465:7;4491:12;;;:6;:12;;;;;:22;;;2505:16;2516:4;2505:10;:16::i;:::-;4929:25:::1;4940:4;4946:7;4929:10;:25::i;:::-;4816:145:::0;;;:::o;5925:214::-;-1:-1:-1;;;;;6020:23:1;;719:10:7;6020:23:1;6012:83;;;;-1:-1:-1;;;6012:83:1;;4148:2:11;6012:83:1;;;4130:21:11;4187:2;4167:18;;;4160:30;4226:34;4206:18;;;4199:62;-1:-1:-1;;;4277:18:11;;;4270:45;4332:19;;6012:83:1;;;;;;;;;6106:26;6118:4;6124:7;6106:11;:26::i;:::-;5925:214;;:::o;5873:234:3:-;5961:4;719:10:7;6015:64:3;719:10:7;6031:7:3;6068:10;6040:25;719:10:7;6031:7:3;6040:9;:25::i;:::-;:38;;;;:::i;:::-;6015:8;:64::i;941:107:0:-;719:24;2505:16:1;2516:4;2505:10;:16::i;:::-;1023:17:0::1;1029:2;1033:6;1023:5;:17::i;578:89:5:-:0;633:27;719:10:7;653:6:5;633:5;:27::i;:::-;578:89;:::o;973:161::-;1049:46;1065:7;719:10:7;1088:6:5;1049:15;:46::i;:::-;1105:22;1111:7;1120:6;1105:5;:22::i;2895:145:1:-;2981:4;3004:12;;;:6;:12;;;;;;;;-1:-1:-1;;;;;3004:29:1;;;;;;;;;;;;;;;2895:145::o;2367:102:3:-;2423:13;2455:7;2448:14;;;;;:::i;6594:427::-;6687:4;719:10:7;6687:4:3;6768:25;719:10:7;6785:7:3;6768:9;:25::i;:::-;6741:52;;6831:15;6811:16;:35;;6803:85;;;;-1:-1:-1;;;6803:85:3;;4826:2:11;6803:85:3;;;4808:21:11;4865:2;4845:18;;;4838:30;4904:34;4884:18;;;4877:62;-1:-1:-1;;;4955:18:11;;;4948:35;5000:19;;6803:85:3;4624:401:11;6803:85:3;6922:60;6931:5;6938:7;6966:15;6947:16;:34;6922:8;:60::i;3729:189::-;3808:4;719:10:7;3862:28:3;719:10:7;3879:2:3;3883:6;3862:9;:28::i;5241:147:1:-;4465:7;4491:12;;;:6;:12;;;;;:22;;;2505:16;2516:4;2505:10;:16::i;:::-;5355:26:::1;5367:4;5373:7;5355:11;:26::i;3976:149:3:-:0;-1:-1:-1;;;;;4091:18:3;;;4065:7;4091:18;;;:11;:18;;;;;;;;:27;;;;;;;;;;;;;3976:149::o;10110:370::-;-1:-1:-1;;;;;10241:19:3;;10233:68;;;;-1:-1:-1;;;10233:68:3;;5232:2:11;10233:68:3;;;5214:21:11;5271:2;5251:18;;;5244:30;5310:34;5290:18;;;5283:62;-1:-1:-1;;;5361:18:11;;;5354:34;5405:19;;10233:68:3;5030:400:11;10233:68:3;-1:-1:-1;;;;;10319:21:3;;10311:68;;;;-1:-1:-1;;;10311:68:3;;5637:2:11;10311:68:3;;;5619:21:11;5676:2;5656:18;;;5649:30;5715:34;5695:18;;;5688:62;-1:-1:-1;;;5766:18:11;;;5759:32;5808:19;;10311:68:3;5435:398:11;10311:68:3;-1:-1:-1;;;;;10390:18:3;;;;;;;:11;:18;;;;;;;;:27;;;;;;;;;;;;;:36;;;10441:32;;1736:25:11;;;10441:32:3;;1709:18:11;10441:32:3;;;;;;;10110:370;;;:::o;10761:441::-;10891:24;10918:25;10928:5;10935:7;10918:9;:25::i;:::-;10891:52;;-1:-1:-1;;10957:16:3;:37;10953:243;;11038:6;11018:16;:26;;11010:68;;;;-1:-1:-1;;;11010:68:3;;6040:2:11;11010:68:3;;;6022:21:11;6079:2;6059:18;;;6052:30;6118:31;6098:18;;;6091:59;6167:18;;11010:68:3;5838:353:11;11010:68:3;11120:51;11129:5;11136:7;11164:6;11145:16;:25;11120:8;:51::i;:::-;10881:321;10761:441;;;:::o;7475:651::-;-1:-1:-1;;;;;7601:18:3;;7593:68;;;;-1:-1:-1;;;7593:68:3;;6398:2:11;7593:68:3;;;6380:21:11;6437:2;6417:18;;;6410:30;6476:34;6456:18;;;6449:62;-1:-1:-1;;;6527:18:11;;;6520:35;6572:19;;7593:68:3;6196:401:11;7593:68:3;-1:-1:-1;;;;;7679:16:3;;7671:64;;;;-1:-1:-1;;;7671:64:3;;6804:2:11;7671:64:3;;;6786:21:11;6843:2;6823:18;;;6816:30;6882:34;6862:18;;;6855:62;-1:-1:-1;;;6933:18:11;;;6926:33;6976:19;;7671:64:3;6602:399:11;7671:64:3;-1:-1:-1;;;;;7817:15:3;;7795:19;7817:15;;;;;;;;;;;7850:21;;;;7842:72;;;;-1:-1:-1;;;7842:72:3;;7208:2:11;7842:72:3;;;7190:21:11;7247:2;7227:18;;;7220:30;7286:34;7266:18;;;7259:62;-1:-1:-1;;;7337:18:11;;;7330:36;7383:19;;7842:72:3;7006:402:11;7842:72:3;-1:-1:-1;;;;;7948:15:3;;;:9;:15;;;;;;;;;;;7966:20;;;7948:38;;8006:13;;;;;;;;:23;;7980:6;;7948:9;8006:23;;7980:6;;8006:23;:::i;:::-;;;;;;;;8060:2;-1:-1:-1;;;;;8045:26:3;8054:4;-1:-1:-1;;;;;8045:26:3;;8064:6;8045:26;;;;1736:25:11;;1724:2;1709:18;;1590:177;8045:26:3;;;;;;;;8082:37;4816:145:1;3334:103;3400:30;3411:4;719:10:7;3400::1;:30::i;7474:233::-;7557:22;7565:4;7571:7;7557;:22::i;:::-;7552:149;;7595:12;;;;:6;:12;;;;;;;;-1:-1:-1;;;;;7595:29:1;;;;;;;;;:36;;-1:-1:-1;;7595:36:1;7627:4;7595:36;;;7677:12;719:10:7;;640:96;7677:12:1;-1:-1:-1;;;;;7650:40:1;7668:7;-1:-1:-1;;;;;7650:40:1;7662:4;7650:40;;;;;;;;;;7474:233;;:::o;7878:234::-;7961:22;7969:4;7975:7;7961;:22::i;:::-;7957:149;;;8031:5;7999:12;;;:6;:12;;;;;;;;-1:-1:-1;;;;;7999:29:1;;;;;;;;;;:37;;-1:-1:-1;;7999:37:1;;;8055:40;719:10:7;;7999:12:1;;8055:40;;8031:5;8055:40;7878:234;;:::o;8402:389:3:-;-1:-1:-1;;;;;8485:21:3;;8477:65;;;;-1:-1:-1;;;8477:65:3;;7615:2:11;8477:65:3;;;7597:21:11;7654:2;7634:18;;;7627:30;7693:33;7673:18;;;7666:61;7744:18;;8477:65:3;7413:355:11;8477:65:3;8629:6;8613:12;;:22;;;;;;;:::i;:::-;;;;-1:-1:-1;;;;;;;8645:18:3;;:9;:18;;;;;;;;;;:28;;8667:6;;8645:9;:28;;8667:6;;8645:28;:::i;:::-;;;;-1:-1:-1;;8688:37:3;;1736:25:11;;;-1:-1:-1;;;;;8688:37:3;;;8705:1;;8688:37;;1724:2:11;1709:18;8688:37:3;;;;;;;5925:214:1;;:::o;9111:576:3:-;-1:-1:-1;;;;;9194:21:3;;9186:67;;;;-1:-1:-1;;;9186:67:3;;7975:2:11;9186:67:3;;;7957:21:11;8014:2;7994:18;;;7987:30;8053:34;8033:18;;;8026:62;-1:-1:-1;;;8104:18:11;;;8097:31;8145:19;;9186:67:3;7773:397:11;9186:67:3;-1:-1:-1;;;;;9349:18:3;;9324:22;9349:18;;;;;;;;;;;9385:24;;;;9377:71;;;;-1:-1:-1;;;9377:71:3;;8377:2:11;9377:71:3;;;8359:21:11;8416:2;8396:18;;;8389:30;8455:34;8435:18;;;8428:62;-1:-1:-1;;;8506:18:11;;;8499:32;8548:19;;9377:71:3;8175:398:11;9377:71:3;-1:-1:-1;;;;;9482:18:3;;:9;:18;;;;;;;;;;9503:23;;;9482:44;;9546:12;:22;;9520:6;;9482:9;9546:22;;9520:6;;9546:22;:::i;:::-;;;;-1:-1:-1;;9584:37:3;;1736:25:11;;;9610:1:3;;-1:-1:-1;;;;;9584:37:3;;;;;1724:2:11;1709:18;9584:37:3;;;;;;;4816:145:1;;;:::o;3718:492::-;3806:22;3814:4;3820:7;3806;:22::i;:::-;3801:403;;3989:41;4017:7;-1:-1:-1;;;;;3989:41:1;4027:2;3989:19;:41::i;:::-;4101:38;4129:4;4136:2;4101:19;:38::i;:::-;3896:265;;;;;;;;;:::i;:::-;;;;-1:-1:-1;;3896:265:1;;;;;;;;;;-1:-1:-1;;;3844:349:1;;;;;;;:::i;1652:441:8:-;1727:13;1752:19;1784:10;1788:6;1784:1;:10;:::i;:::-;:14;;1797:1;1784:14;:::i;:::-;1774:25;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;1774:25:8;;1752:47;;-1:-1:-1;;;1809:6:8;1816:1;1809:9;;;;;;;;:::i;:::-;;;;:15;-1:-1:-1;;;;;1809:15:8;;;;;;;;;-1:-1:-1;;;1834:6:8;1841:1;1834:9;;;;;;;;:::i;:::-;;;;:15;-1:-1:-1;;;;;1834:15:8;;;;;;;;-1:-1:-1;1864:9:8;1876:10;1880:6;1876:1;:10;:::i;:::-;:14;;1889:1;1876:14;:::i;:::-;1864:26;;1859:132;1896:1;1892;:5;1859:132;;;-1:-1:-1;;;1943:5:8;1951:3;1943:11;1930:25;;;;;;;:::i;:::-;;;;1918:6;1925:1;1918:9;;;;;;;;:::i;:::-;;;;:37;-1:-1:-1;;;;;1918:37:8;;;;;;;;-1:-1:-1;1979:1:8;1969:11;;;;;1899:3;;;:::i;:::-;;;1859:132;;;-1:-1:-1;2008:10:8;;2000:55;;;;-1:-1:-1;;;2000:55:8;;10308:2:11;2000:55:8;;;10290:21:11;;;10327:18;;;10320:30;10386:34;10366:18;;;10359:62;10438:18;;2000:55:8;10106:356:11;2000:55:8;2079:6;1652:441;-1:-1:-1;;;1652:441:8:o;14:286:11:-;72:6;125:2;113:9;104:7;100:23;96:32;93:52;;;141:1;138;131:12;93:52;167:23;;-1:-1:-1;;;;;;219:32:11;;209:43;;199:71;;266:1;263;256:12;497:250;582:1;592:113;606:6;603:1;600:13;592:113;;;682:11;;;676:18;663:11;;;656:39;628:2;621:10;592:113;;;-1:-1:-1;;739:1:11;721:16;;714:27;497:250::o;752:396::-;901:2;890:9;883:21;864:4;933:6;927:13;976:6;971:2;960:9;956:18;949:34;992:79;1064:6;1059:2;1048:9;1044:18;1039:2;1031:6;1027:15;992:79;:::i;:::-;1132:2;1111:15;-1:-1:-1;;1107:29:11;1092:45;;;;1139:2;1088:54;;752:396;-1:-1:-1;;752:396:11:o;1153:173::-;1221:20;;-1:-1:-1;;;;;1270:31:11;;1260:42;;1250:70;;1316:1;1313;1306:12;1250:70;1153:173;;;:::o;1331:254::-;1399:6;1407;1460:2;1448:9;1439:7;1435:23;1431:32;1428:52;;;1476:1;1473;1466:12;1428:52;1499:29;1518:9;1499:29;:::i;:::-;1489:39;1575:2;1560:18;;;;1547:32;;-1:-1:-1;;;1331:254:11:o;1772:328::-;1849:6;1857;1865;1918:2;1906:9;1897:7;1893:23;1889:32;1886:52;;;1934:1;1931;1924:12;1886:52;1957:29;1976:9;1957:29;:::i;:::-;1947:39;;2005:38;2039:2;2028:9;2024:18;2005:38;:::i;:::-;1995:48;;2090:2;2079:9;2075:18;2062:32;2052:42;;1772:328;;;;;:::o;2105:180::-;2164:6;2217:2;2205:9;2196:7;2192:23;2188:32;2185:52;;;2233:1;2230;2223:12;2185:52;-1:-1:-1;2256:23:11;;2105:180;-1:-1:-1;2105:180:11:o;2472:254::-;2540:6;2548;2601:2;2589:9;2580:7;2576:23;2572:32;2569:52;;;2617:1;2614;2607:12;2569:52;2653:9;2640:23;2630:33;;2682:38;2716:2;2705:9;2701:18;2682:38;:::i;:::-;2672:48;;2472:254;;;;;:::o;3105:186::-;3164:6;3217:2;3205:9;3196:7;3192:23;3188:32;3185:52;;;3233:1;3230;3223:12;3185:52;3256:29;3275:9;3256:29;:::i;3296:260::-;3364:6;3372;3425:2;3413:9;3404:7;3400:23;3396:32;3393:52;;;3441:1;3438;3431:12;3393:52;3464:29;3483:9;3464:29;:::i;:::-;3454:39;;3512:38;3546:2;3535:9;3531:18;3512:38;:::i;3561:380::-;3640:1;3636:12;;;;3683;;;3704:61;;3758:4;3750:6;3746:17;3736:27;;3704:61;3811:2;3803:6;3800:14;3780:18;3777:38;3774:161;;3857:10;3852:3;3848:20;3845:1;3838:31;3892:4;3889:1;3882:15;3920:4;3917:1;3910:15;3774:161;;3561:380;;;:::o;4362:127::-;4423:10;4418:3;4414:20;4411:1;4404:31;4454:4;4451:1;4444:15;4478:4;4475:1;4468:15;4494:125;4559:9;;;4580:10;;;4577:36;;;4593:18;;:::i;8578:128::-;8645:9;;;8666:11;;;8663:37;;;8680:18;;:::i;8711:812::-;9122:25;9117:3;9110:38;9092:3;9177:6;9171:13;9193:75;9261:6;9256:2;9251:3;9247:12;9240:4;9232:6;9228:17;9193:75;:::i;:::-;-1:-1:-1;;;9327:2:11;9287:16;;;9319:11;;;9312:40;9377:13;;9399:76;9377:13;9461:2;9453:11;;9446:4;9434:17;;9399:76;:::i;:::-;9495:17;9514:2;9491:26;;8711:812;-1:-1:-1;;;;8711:812:11:o;9528:168::-;9568:7;9634:1;9630;9626:6;9622:14;9619:1;9616:21;9611:1;9604:9;9597:17;9593:45;9590:71;;;9641:18;;:::i;:::-;-1:-1:-1;9681:9:11;;9528:168::o;9701:127::-;9762:10;9757:3;9753:20;9750:1;9743:31;9793:4;9790:1;9783:15;9817:4;9814:1;9807:15;9833:127;9894:10;9889:3;9885:20;9882:1;9875:31;9925:4;9922:1;9915:15;9949:4;9946:1;9939:15;9965:136;10004:3;10032:5;10022:39;;10041:18;;:::i;:::-;-1:-1:-1;;;10077:18:11;;9965:136::o",
  "sourcePath": "c:/Users/Nikos/Desktop/SolidityBootcamp/Encode-Solidity-Bootcamp-Weekend-Projects/team-project/payroll/contracts/Payroll.sol",
  "compiler": {
      "name": "solc",
      "version": "0.8.16+commit.07a7930e"
  },
  "ast": {
      "absolutePath": "c:/Users/Nikos/Desktop/SolidityBootcamp/Encode-Solidity-Bootcamp-Weekend-Projects/team-project/payroll/contracts/Payroll.sol",
      "exportedSymbols": {
          "AccessControl": [
              618
          ],
          "Context": [
              1446
          ],
          "ERC165": [
              1696
          ],
          "ERC20": [
              1277
          ],
          "ERC20Burnable": [
              1399
          ],
          "IAccessControl": [
              691
          ],
          "IERC165": [
              1708
          ],
          "IERC20": [
              1355
          ],
          "IERC20Metadata": [
              1424
          ],
          "Payroll": [
              298
          ],
          "PayrollToken": [
              56
          ],
          "Strings": [
              1672
          ]
      },
      "id": 299,
      "license": "MIT",
      "nodeType": "SourceUnit",
      "nodes": [
          {
              "id": 1,
              "literals": [
                  "solidity",
                  ">=",
                  "0.8",
                  ".0",
                  "<",
                  "0.9",
                  ".0"
              ],
              "nodeType": "PragmaDirective",
              "src": "32:31:0"
          },
          {
              "absolutePath": "c:/Users/Nikos/Desktop/SolidityBootcamp/Encode-Solidity-Bootcamp-Weekend-Projects/team-project/payroll/node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol",
              "file": "c:/Users/Nikos/Desktop/SolidityBootcamp/Encode-Solidity-Bootcamp-Weekend-Projects/team-project/payroll/node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol",
              "id": 2,
              "nameLocation": "-1:-1:-1",
              "nodeType": "ImportDirective",
              "scope": 299,
              "sourceUnit": 1278,
              "src": "67:171:0",
              "symbolAliases": [],
              "unitAlias": ""
          },
          {
              "absolutePath": "c:/Users/Nikos/Desktop/SolidityBootcamp/Encode-Solidity-Bootcamp-Weekend-Projects/team-project/payroll/node_modules/@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol",
              "file": "c:/Users/Nikos/Desktop/SolidityBootcamp/Encode-Solidity-Bootcamp-Weekend-Projects/team-project/payroll/node_modules/@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol",
              "id": 3,
              "nameLocation": "-1:-1:-1",
              "nodeType": "ImportDirective",
              "scope": 299,
              "sourceUnit": 1400,
              "src": "240:190:0",
              "symbolAliases": [],
              "unitAlias": ""
          },
          {
              "absolutePath": "c:/Users/Nikos/Desktop/SolidityBootcamp/Encode-Solidity-Bootcamp-Weekend-Projects/team-project/payroll/node_modules/@openzeppelin/contracts/access/AccessControl.sol",
              "file": "c:/Users/Nikos/Desktop/SolidityBootcamp/Encode-Solidity-Bootcamp-Weekend-Projects/team-project/payroll/node_modules/@openzeppelin/contracts/access/AccessControl.sol",
              "id": 4,
              "nameLocation": "-1:-1:-1",
              "nodeType": "ImportDirective",
              "scope": 299,
              "sourceUnit": 619,
              "src": "432:174:0",
              "symbolAliases": [],
              "unitAlias": ""
          },
          {
              "abstract": false,
              "baseContracts": [
                  {
                      "baseName": {
                          "id": 5,
                          "name": "ERC20",
                          "nameLocations": [
                              "635:5:0"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 1277,
                          "src": "635:5:0"
                      },
                      "id": 6,
                      "nodeType": "InheritanceSpecifier",
                      "src": "635:5:0"
                  },
                  {
                      "baseName": {
                          "id": 7,
                          "name": "ERC20Burnable",
                          "nameLocations": [
                              "642:13:0"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 1399,
                          "src": "642:13:0"
                      },
                      "id": 8,
                      "nodeType": "InheritanceSpecifier",
                      "src": "642:13:0"
                  },
                  {
                      "baseName": {
                          "id": 9,
                          "name": "AccessControl",
                          "nameLocations": [
                              "657:13:0"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 618,
                          "src": "657:13:0"
                      },
                      "id": 10,
                      "nodeType": "InheritanceSpecifier",
                      "src": "657:13:0"
                  }
              ],
              "canonicalName": "PayrollToken",
              "contractDependencies": [],
              "contractKind": "contract",
              "fullyImplemented": true,
              "id": 56,
              "linearizedBaseContracts": [
                  56,
                  618,
                  1696,
                  1708,
                  691,
                  1399,
                  1277,
                  1424,
                  1355,
                  1446
              ],
              "name": "PayrollToken",
              "nameLocation": "619:12:0",
              "nodeType": "ContractDefinition",
              "nodes": [
                  {
                      "constant": true,
                      "functionSelector": "d5391393",
                      "id": 15,
                      "mutability": "constant",
                      "name": "MINTER_ROLE",
                      "nameLocation": "705:11:0",
                      "nodeType": "VariableDeclaration",
                      "scope": 56,
                      "src": "681:62:0",
                      "stateVariable": true,
                      "storageLocation": "default",
                      "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                      },
                      "typeName": {
                          "id": 11,
                          "name": "bytes32",
                          "nodeType": "ElementaryTypeName",
                          "src": "681:7:0",
                          "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                          }
                      },
                      "value": {
                          "arguments": [
                              {
                                  "hexValue": "4d494e5445525f524f4c45",
                                  "id": 13,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "string",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "729:13:0",
                                  "typeDescriptions": {
                                      "typeIdentifier": "t_stringliteral_9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6",
                                      "typeString": "literal_string \"MINTER_ROLE\""
                                  },
                                  "value": "MINTER_ROLE"
                              }
                          ],
                          "expression": {
                              "argumentTypes": [
                                  {
                                      "typeIdentifier": "t_stringliteral_9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6",
                                      "typeString": "literal_string \"MINTER_ROLE\""
                                  }
                              ],
                              "id": 12,
                              "name": "keccak256",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4294967288,
                              "src": "719:9:0",
                              "typeDescriptions": {
                                  "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                  "typeString": "function (bytes memory) pure returns (bytes32)"
                              }
                          },
                          "id": 14,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "719:24:0",
                          "tryCall": false,
                          "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                          }
                      },
                      "visibility": "public"
                  },
                  {
                      "body": {
                          "id": 38,
                          "nodeType": "Block",
                          "src": "826:107:0",
                          "statements": [
                              {
                                  "expression": {
                                      "arguments": [
                                          {
                                              "id": 27,
                                              "name": "DEFAULT_ADMIN_ROLE",
                                              "nodeType": "Identifier",
                                              "overloadedDeclarations": [],
                                              "referencedDeclaration": 326,
                                              "src": "848:18:0",
                                              "typeDescriptions": {
                                                  "typeIdentifier": "t_bytes32",
                                                  "typeString": "bytes32"
                                              }
                                          },
                                          {
                                              "expression": {
                                                  "id": 28,
                                                  "name": "msg",
                                                  "nodeType": "Identifier",
                                                  "overloadedDeclarations": [],
                                                  "referencedDeclaration": 4294967281,
                                                  "src": "868:3:0",
                                                  "typeDescriptions": {
                                                      "typeIdentifier": "t_magic_message",
                                                      "typeString": "msg"
                                                  }
                                              },
                                              "id": 29,
                                              "isConstant": false,
                                              "isLValue": false,
                                              "isPure": false,
                                              "lValueRequested": false,
                                              "memberLocation": "872:6:0",
                                              "memberName": "sender",
                                              "nodeType": "MemberAccess",
                                              "src": "868:10:0",
                                              "typeDescriptions": {
                                                  "typeIdentifier": "t_address",
                                                  "typeString": "address"
                                              }
                                          }
                                      ],
                                      "expression": {
                                          "argumentTypes": [
                                              {
                                                  "typeIdentifier": "t_bytes32",
                                                  "typeString": "bytes32"
                                              },
                                              {
                                                  "typeIdentifier": "t_address",
                                                  "typeString": "address"
                                              }
                                          ],
                                          "id": 26,
                                          "name": "_grantRole",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 586,
                                          "src": "837:10:0",
                                          "typeDescriptions": {
                                              "typeIdentifier": "t_function_internal_nonpayable$_t_bytes32_$_t_address_$returns$__$",
                                              "typeString": "function (bytes32,address)"
                                          }
                                      },
                                      "id": 30,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "kind": "functionCall",
                                      "lValueRequested": false,
                                      "nameLocations": [],
                                      "names": [],
                                      "nodeType": "FunctionCall",
                                      "src": "837:42:0",
                                      "tryCall": false,
                                      "typeDescriptions": {
                                          "typeIdentifier": "t_tuple$__$",
                                          "typeString": "tuple()"
                                      }
                                  },
                                  "id": 31,
                                  "nodeType": "ExpressionStatement",
                                  "src": "837:42:0"
                              },
                              {
                                  "expression": {
                                      "arguments": [
                                          {
                                              "id": 33,
                                              "name": "MINTER_ROLE",
                                              "nodeType": "Identifier",
                                              "overloadedDeclarations": [],
                                              "referencedDeclaration": 15,
                                              "src": "901:11:0",
                                              "typeDescriptions": {
                                                  "typeIdentifier": "t_bytes32",
                                                  "typeString": "bytes32"
                                              }
                                          },
                                          {
                                              "expression": {
                                                  "id": 34,
                                                  "name": "msg",
                                                  "nodeType": "Identifier",
                                                  "overloadedDeclarations": [],
                                                  "referencedDeclaration": 4294967281,
                                                  "src": "914:3:0",
                                                  "typeDescriptions": {
                                                      "typeIdentifier": "t_magic_message",
                                                      "typeString": "msg"
                                                  }
                                              },
                                              "id": 35,
                                              "isConstant": false,
                                              "isLValue": false,
                                              "isPure": false,
                                              "lValueRequested": false,
                                              "memberLocation": "918:6:0",
                                              "memberName": "sender",
                                              "nodeType": "MemberAccess",
                                              "src": "914:10:0",
                                              "typeDescriptions": {
                                                  "typeIdentifier": "t_address",
                                                  "typeString": "address"
                                              }
                                          }
                                      ],
                                      "expression": {
                                          "argumentTypes": [
                                              {
                                                  "typeIdentifier": "t_bytes32",
                                                  "typeString": "bytes32"
                                              },
                                              {
                                                  "typeIdentifier": "t_address",
                                                  "typeString": "address"
                                              }
                                          ],
                                          "id": 32,
                                          "name": "_grantRole",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 586,
                                          "src": "890:10:0",
                                          "typeDescriptions": {
                                              "typeIdentifier": "t_function_internal_nonpayable$_t_bytes32_$_t_address_$returns$__$",
                                              "typeString": "function (bytes32,address)"
                                          }
                                      },
                                      "id": 36,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "kind": "functionCall",
                                      "lValueRequested": false,
                                      "nameLocations": [],
                                      "names": [],
                                      "nodeType": "FunctionCall",
                                      "src": "890:35:0",
                                      "tryCall": false,
                                      "typeDescriptions": {
                                          "typeIdentifier": "t_tuple$__$",
                                          "typeString": "tuple()"
                                      }
                                  },
                                  "id": 37,
                                  "nodeType": "ExpressionStatement",
                                  "src": "890:35:0"
                              }
                          ]
                      },
                      "id": 39,
                      "implemented": true,
                      "kind": "constructor",
                      "modifiers": [
                          {
                              "arguments": [
                                  {
                                      "id": 22,
                                      "name": "name",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 17,
                                      "src": "812:4:0",
                                      "typeDescriptions": {
                                          "typeIdentifier": "t_string_memory_ptr",
                                          "typeString": "string memory"
                                      }
                                  },
                                  {
                                      "id": 23,
                                      "name": "symbol",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 19,
                                      "src": "818:6:0",
                                      "typeDescriptions": {
                                          "typeIdentifier": "t_string_memory_ptr",
                                          "typeString": "string memory"
                                      }
                                  }
                              ],
                              "id": 24,
                              "kind": "baseConstructorSpecifier",
                              "modifierName": {
                                  "id": 21,
                                  "name": "ERC20",
                                  "nameLocations": [
                                      "806:5:0"
                                  ],
                                  "nodeType": "IdentifierPath",
                                  "referencedDeclaration": 1277,
                                  "src": "806:5:0"
                              },
                              "nodeType": "ModifierInvocation",
                              "src": "806:19:0"
                          }
                      ],
                      "name": "",
                      "nameLocation": "-1:-1:-1",
                      "nodeType": "FunctionDefinition",
                      "parameters": {
                          "id": 20,
                          "nodeType": "ParameterList",
                          "parameters": [
                              {
                                  "constant": false,
                                  "id": 17,
                                  "mutability": "mutable",
                                  "name": "name",
                                  "nameLocation": "778:4:0",
                                  "nodeType": "VariableDeclaration",
                                  "scope": 39,
                                  "src": "764:18:0",
                                  "stateVariable": false,
                                  "storageLocation": "memory",
                                  "typeDescriptions": {
                                      "typeIdentifier": "t_string_memory_ptr",
                                      "typeString": "string"
                                  },
                                  "typeName": {
                                      "id": 16,
                                      "name": "string",
                                      "nodeType": "ElementaryTypeName",
                                      "src": "764:6:0",
                                      "typeDescriptions": {
                                          "typeIdentifier": "t_string_storage_ptr",
                                          "typeString": "string"
                                      }
                                  },
                                  "visibility": "internal"
                              },
                              {
                                  "constant": false,
                                  "id": 19,
                                  "mutability": "mutable",
                                  "name": "symbol",
                                  "nameLocation": "798:6:0",
                                  "nodeType": "VariableDeclaration",
                                  "scope": 39,
                                  "src": "784:20:0",
                                  "stateVariable": false,
                                  "storageLocation": "memory",
                                  "typeDescriptions": {
                                      "typeIdentifier": "t_string_memory_ptr",
                                      "typeString": "string"
                                  },
                                  "typeName": {
                                      "id": 18,
                                      "name": "string",
                                      "nodeType": "ElementaryTypeName",
                                      "src": "784:6:0",
                                      "typeDescriptions": {
                                          "typeIdentifier": "t_string_storage_ptr",
                                          "typeString": "string"
                                      }
                                  },
                                  "visibility": "internal"
                              }
                          ],
                          "src": "763:42:0"
                      },
                      "returnParameters": {
                          "id": 25,
                          "nodeType": "ParameterList",
                          "parameters": [],
                          "src": "826:0:0"
                      },
                      "scope": 56,
                      "src": "752:181:0",
                      "stateMutability": "nonpayable",
                      "virtual": false,
                      "visibility": "public"
                  },
                  {
                      "body": {
                          "id": 54,
                          "nodeType": "Block",
                          "src": "1012:36:0",
                          "statements": [
                              {
                                  "expression": {
                                      "arguments": [
                                          {
                                              "id": 50,
                                              "name": "to",
                                              "nodeType": "Identifier",
                                              "overloadedDeclarations": [],
                                              "referencedDeclaration": 41,
                                              "src": "1029:2:0",
                                              "typeDescriptions": {
                                                  "typeIdentifier": "t_address",
                                                  "typeString": "address"
                                              }
                                          },
                                          {
                                              "id": 51,
                                              "name": "amount",
                                              "nodeType": "Identifier",
                                              "overloadedDeclarations": [],
                                              "referencedDeclaration": 43,
                                              "src": "1033:6:0",
                                              "typeDescriptions": {
                                                  "typeIdentifier": "t_uint256",
                                                  "typeString": "uint256"
                                              }
                                          }
                                      ],
                                      "expression": {
                                          "argumentTypes": [
                                              {
                                                  "typeIdentifier": "t_address",
                                                  "typeString": "address"
                                              },
                                              {
                                                  "typeIdentifier": "t_uint256",
                                                  "typeString": "uint256"
                                              }
                                          ],
                                          "id": 49,
                                          "name": "_mint",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 1094,
                                          "src": "1023:5:0",
                                          "typeDescriptions": {
                                              "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                                              "typeString": "function (address,uint256)"
                                          }
                                      },
                                      "id": 52,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "kind": "functionCall",
                                      "lValueRequested": false,
                                      "nameLocations": [],
                                      "names": [],
                                      "nodeType": "FunctionCall",
                                      "src": "1023:17:0",
                                      "tryCall": false,
                                      "typeDescriptions": {
                                          "typeIdentifier": "t_tuple$__$",
                                          "typeString": "tuple()"
                                      }
                                  },
                                  "id": 53,
                                  "nodeType": "ExpressionStatement",
                                  "src": "1023:17:0"
                              }
                          ]
                      },
                      "functionSelector": "40c10f19",
                      "id": 55,
                      "implemented": true,
                      "kind": "function",
                      "modifiers": [
                          {
                              "arguments": [
                                  {
                                      "id": 46,
                                      "name": "MINTER_ROLE",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 15,
                                      "src": "999:11:0",
                                      "typeDescriptions": {
                                          "typeIdentifier": "t_bytes32",
                                          "typeString": "bytes32"
                                      }
                                  }
                              ],
                              "id": 47,
                              "kind": "modifierInvocation",
                              "modifierName": {
                                  "id": 45,
                                  "name": "onlyRole",
                                  "nameLocations": [
                                      "990:8:0"
                                  ],
                                  "nodeType": "IdentifierPath",
                                  "referencedDeclaration": 337,
                                  "src": "990:8:0"
                              },
                              "nodeType": "ModifierInvocation",
                              "src": "990:21:0"
                          }
                      ],
                      "name": "mint",
                      "nameLocation": "950:4:0",
                      "nodeType": "FunctionDefinition",
                      "parameters": {
                          "id": 44,
                          "nodeType": "ParameterList",
                          "parameters": [
                              {
                                  "constant": false,
                                  "id": 41,
                                  "mutability": "mutable",
                                  "name": "to",
                                  "nameLocation": "963:2:0",
                                  "nodeType": "VariableDeclaration",
                                  "scope": 55,
                                  "src": "955:10:0",
                                  "stateVariable": false,
                                  "storageLocation": "default",
                                  "typeDescriptions": {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                  },
                                  "typeName": {
                                      "id": 40,
                                      "name": "address",
                                      "nodeType": "ElementaryTypeName",
                                      "src": "955:7:0",
                                      "stateMutability": "nonpayable",
                                      "typeDescriptions": {
                                          "typeIdentifier": "t_address",
                                          "typeString": "address"
                                      }
                                  },
                                  "visibility": "internal"
                              },
                              {
                                  "constant": false,
                                  "id": 43,
                                  "mutability": "mutable",
                                  "name": "amount",
                                  "nameLocation": "975:6:0",
                                  "nodeType": "VariableDeclaration",
                                  "scope": 55,
                                  "src": "967:14:0",
                                  "stateVariable": false,
                                  "storageLocation": "default",
                                  "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                  },
                                  "typeName": {
                                      "id": 42,
                                      "name": "uint256",
                                      "nodeType": "ElementaryTypeName",
                                      "src": "967:7:0",
                                      "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                      }
                                  },
                                  "visibility": "internal"
                              }
                          ],
                          "src": "954:28:0"
                      },
                      "returnParameters": {
                          "id": 48,
                          "nodeType": "ParameterList",
                          "parameters": [],
                          "src": "1012:0:0"
                      },
                      "scope": 56,
                      "src": "941:107:0",
                      "stateMutability": "nonpayable",
                      "virtual": false,
                      "visibility": "public"
                  }
              ],
              "scope": 299,
              "src": "610:441:0",
              "usedErrors": []
          },
          {
              "abstract": false,
              "baseContracts": [],
              "canonicalName": "Payroll",
              "contractDependencies": [
                  56
              ],
              "contractKind": "contract",
              "fullyImplemented": true,
              "id": 298,
              "linearizedBaseContracts": [
                  298
              ],
              "name": "Payroll",
              "nameLocation": "1064:7:0",
              "nodeType": "ContractDefinition",
              "nodes": [
                  {
                      "constant": false,
                      "functionSelector": "3013ce29",
                      "id": 59,
                      "mutability": "mutable",
                      "name": "paymentToken",
                      "nameLocation": "1099:12:0",
                      "nodeType": "VariableDeclaration",
                      "scope": 298,
                      "src": "1079:32:0",
                      "stateVariable": true,
                      "storageLocation": "default",
                      "typeDescriptions": {
                          "typeIdentifier": "t_contract$_PayrollToken_$56",
                          "typeString": "contract PayrollToken"
                      },
                      "typeName": {
                          "id": 58,
                          "nodeType": "UserDefinedTypeName",
                          "pathNode": {
                              "id": 57,
                              "name": "PayrollToken",
                              "nameLocations": [
                                  "1079:12:0"
                              ],
                              "nodeType": "IdentifierPath",
                              "referencedDeclaration": 56,
                              "src": "1079:12:0"
                          },
                          "referencedDeclaration": 56,
                          "src": "1079:12:0",
                          "typeDescriptions": {
                              "typeIdentifier": "t_contract$_PayrollToken_$56",
                              "typeString": "contract PayrollToken"
                          }
                      },
                      "visibility": "public"
                  },
                  {
                      "constant": false,
                      "functionSelector": "d36acc39",
                      "id": 61,
                      "mutability": "mutable",
                      "name": "companyAcc",
                      "nameLocation": "1133:10:0",
                      "nodeType": "VariableDeclaration",
                      "scope": 298,
                      "src": "1118:25:0",
                      "stateVariable": true,
                      "storageLocation": "default",
                      "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                      },
                      "typeName": {
                          "id": 60,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "1118:7:0",
                          "stateMutability": "nonpayable",
                          "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                          }
                      },
                      "visibility": "public"
                  },
                  {
                      "constant": false,
                      "functionSelector": "52b9b973",
                      "id": 64,
                      "mutability": "mutable",
                      "name": "totalEmployees",
                      "nameLocation": "1165:14:0",
                      "nodeType": "VariableDeclaration",
                      "scope": 298,
                      "src": "1150:33:0",
                      "stateVariable": true,
                      "storageLocation": "default",
                      "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                      },
                      "typeName": {
                          "id": 62,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "1150:7:0",
                          "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                          }
                      },
                      "value": {
                          "hexValue": "30",
                          "id": 63,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1182:1:0",
                          "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                          },
                          "value": "0"
                      },
                      "visibility": "public"
                  },
                  {
                      "constant": false,
                      "functionSelector": "2e46eb1d",
                      "id": 67,
                      "mutability": "mutable",
                      "name": "totalSalary",
                      "nameLocation": "1205:11:0",
                      "nodeType": "VariableDeclaration",
                      "scope": 298,
                      "src": "1190:30:0",
                      "stateVariable": true,
                      "storageLocation": "default",
                      "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                      },
                      "typeName": {
                          "id": 65,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "1190:7:0",
                          "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                          }
                      },
                      "value": {
                          "hexValue": "30",
                          "id": 66,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1219:1:0",
                          "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                          },
                          "value": "0"
                      },
                      "visibility": "public"
                  },
                  {
                      "constant": false,
                      "functionSelector": "58eeabbc",
                      "id": 70,
                      "mutability": "mutable",
                      "name": "totalPayment",
                      "nameLocation": "1242:12:0",
                      "nodeType": "VariableDeclaration",
                      "scope": 298,
                      "src": "1227:31:0",
                      "stateVariable": true,
                      "storageLocation": "default",
                      "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                      },
                      "typeName": {
                          "id": 68,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "1227:7:0",
                          "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                          }
                      },
                      "value": {
                          "hexValue": "30",
                          "id": 69,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1257:1:0",
                          "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                          },
                          "value": "0"
                      },
                      "visibility": "public"
                  },
                  {
                      "constant": false,
                      "id": 74,
                      "mutability": "mutable",
                      "name": "IsEmployee",
                      "nameLocation": "1292:10:0",
                      "nodeType": "VariableDeclaration",
                      "scope": 298,
                      "src": "1267:35:0",
                      "stateVariable": true,
                      "storageLocation": "default",
                      "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                          "typeString": "mapping(address => bool)"
                      },
                      "typeName": {
                          "id": 73,
                          "keyType": {
                              "id": 71,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "1275:7:0",
                              "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                              }
                          },
                          "nodeType": "Mapping",
                          "src": "1267:24:0",
                          "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                              "typeString": "mapping(address => bool)"
                          },
                          "valueType": {
                              "id": 72,
                              "name": "bool",
                              "nodeType": "ElementaryTypeName",
                              "src": "1286:4:0",
                              "typeDescriptions": {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                              }
                          }
                      },
                      "visibility": "internal"
                  },
                  {
                      "anonymous": false,
                      "eventSelector": "59e5c638e8e7ab669e805847b18203cf00e4ab4d0688c3da8e486aba4cc4fed2",
                      "id": 84,
                      "name": "Paid",
                      "nameLocation": "1317:4:0",
                      "nodeType": "EventDefinition",
                      "parameters": {
                          "id": 83,
                          "nodeType": "ParameterList",
                          "parameters": [
                              {
                                  "constant": false,
                                  "id": 76,
                                  "indexed": false,
                                  "mutability": "mutable",
                                  "name": "id",
                                  "nameLocation": "1340:2:0",
                                  "nodeType": "VariableDeclaration",
                                  "scope": 84,
                                  "src": "1332:10:0",
                                  "stateVariable": false,
                                  "storageLocation": "default",
                                  "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                  },
                                  "typeName": {
                                      "id": 75,
                                      "name": "uint256",
                                      "nodeType": "ElementaryTypeName",
                                      "src": "1332:7:0",
                                      "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                      }
                                  },
                                  "visibility": "internal"
                              },
                              {
                                  "constant": false,
                                  "id": 78,
                                  "indexed": false,
                                  "mutability": "mutable",
                                  "name": "from",
                                  "nameLocation": "1361:4:0",
                                  "nodeType": "VariableDeclaration",
                                  "scope": 84,
                                  "src": "1353:12:0",
                                  "stateVariable": false,
                                  "storageLocation": "default",
                                  "typeDescriptions": {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                  },
                                  "typeName": {
                                      "id": 77,
                                      "name": "address",
                                      "nodeType": "ElementaryTypeName",
                                      "src": "1353:7:0",
                                      "stateMutability": "nonpayable",
                                      "typeDescriptions": {
                                          "typeIdentifier": "t_address",
                                          "typeString": "address"
                                      }
                                  },
                                  "visibility": "internal"
                              },
                              {
                                  "constant": false,
                                  "id": 80,
                                  "indexed": false,
                                  "mutability": "mutable",
                                  "name": "totalSalary",
                                  "nameLocation": "1384:11:0",
                                  "nodeType": "VariableDeclaration",
                                  "scope": 84,
                                  "src": "1376:19:0",
                                  "stateVariable": false,
                                  "storageLocation": "default",
                                  "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                  },
                                  "typeName": {
                                      "id": 79,
                                      "name": "uint256",
                                      "nodeType": "ElementaryTypeName",
                                      "src": "1376:7:0",
                                      "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                      }
                                  },
                                  "visibility": "internal"
                              },
                              {
                                  "constant": false,
                                  "id": 82,
                                  "indexed": false,
                                  "mutability": "mutable",
                                  "name": "timestamp",
                                  "nameLocation": "1414:9:0",
                                  "nodeType": "VariableDeclaration",
                                  "scope": 84,
                                  "src": "1406:17:0",
                                  "stateVariable": false,
                                  "storageLocation": "default",
                                  "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                  },
                                  "typeName": {
                                      "id": 81,
                                      "name": "uint256",
                                      "nodeType": "ElementaryTypeName",
                                      "src": "1406:7:0",
                                      "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                      }
                                  },
                                  "visibility": "internal"
                              }
                          ],
                          "src": "1321:109:0"
                      },
                      "src": "1311:120:0"
                  },
                  {
                      "canonicalName": "Payroll.EmployeeStruct",
                      "id": 93,
                      "members": [
                          {
                              "constant": false,
                              "id": 86,
                              "mutability": "mutable",
                              "name": "id",
                              "nameLocation": "1480:2:0",
                              "nodeType": "VariableDeclaration",
                              "scope": 93,
                              "src": "1472:10:0",
                              "stateVariable": false,
                              "storageLocation": "default",
                              "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                              },
                              "typeName": {
                                  "id": 85,
                                  "name": "uint256",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "1472:7:0",
                                  "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                  }
                              },
                              "visibility": "internal"
                          },
                          {
                              "constant": false,
                              "id": 88,
                              "mutability": "mutable",
                              "name": "paymentAddress",
                              "nameLocation": "1501:14:0",
                              "nodeType": "VariableDeclaration",
                              "scope": 93,
                              "src": "1493:22:0",
                              "stateVariable": false,
                              "storageLocation": "default",
                              "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                              },
                              "typeName": {
                                  "id": 87,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "1493:7:0",
                                  "stateMutability": "nonpayable",
                                  "typeDescriptions": {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                  }
                              },
                              "visibility": "internal"
                          },
                          {
                              "constant": false,
                              "id": 90,
                              "mutability": "mutable",
                              "name": "salary",
                              "nameLocation": "1534:6:0",
                              "nodeType": "VariableDeclaration",
                              "scope": 93,
                              "src": "1526:14:0",
                              "stateVariable": false,
                              "storageLocation": "default",
                              "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                              },
                              "typeName": {
                                  "id": 89,
                                  "name": "uint256",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "1526:7:0",
                                  "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                  }
                              },
                              "visibility": "internal"
                          },
                          {
                              "constant": false,
                              "id": 92,
                              "mutability": "mutable",
                              "name": "timestamp",
                              "nameLocation": "1559:9:0",
                              "nodeType": "VariableDeclaration",
                              "scope": 93,
                              "src": "1551:17:0",
                              "stateVariable": false,
                              "storageLocation": "default",
                              "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                              },
                              "typeName": {
                                  "id": 91,
                                  "name": "uint256",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "1551:7:0",
                                  "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                  }
                              },
                              "visibility": "internal"
                          }
                      ],
                      "name": "EmployeeStruct",
                      "nameLocation": "1446:14:0",
                      "nodeType": "StructDefinition",
                      "scope": 298,
                      "src": "1439:137:0",
                      "visibility": "public"
                  },
                  {
                      "constant": false,
                      "id": 97,
                      "mutability": "mutable",
                      "name": "employees",
                      "nameLocation": "1601:9:0",
                      "nodeType": "VariableDeclaration",
                      "scope": 298,
                      "src": "1584:26:0",
                      "stateVariable": true,
                      "storageLocation": "default",
                      "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_struct$_EmployeeStruct_$93_storage_$dyn_storage",
                          "typeString": "struct Payroll.EmployeeStruct[]"
                      },
                      "typeName": {
                          "baseType": {
                              "id": 95,
                              "nodeType": "UserDefinedTypeName",
                              "pathNode": {
                                  "id": 94,
                                  "name": "EmployeeStruct",
                                  "nameLocations": [
                                      "1584:14:0"
                                  ],
                                  "nodeType": "IdentifierPath",
                                  "referencedDeclaration": 93,
                                  "src": "1584:14:0"
                              },
                              "referencedDeclaration": 93,
                              "src": "1584:14:0",
                              "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_EmployeeStruct_$93_storage_ptr",
                                  "typeString": "struct Payroll.EmployeeStruct"
                              }
                          },
                          "id": 96,
                          "nodeType": "ArrayTypeName",
                          "src": "1584:16:0",
                          "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_struct$_EmployeeStruct_$93_storage_$dyn_storage_ptr",
                              "typeString": "struct Payroll.EmployeeStruct[]"
                          }
                      },
                      "visibility": "internal"
                  },
                  {
                      "body": {
                          "id": 108,
                          "nodeType": "Block",
                          "src": "1639:87:0",
                          "statements": [
                              {
                                  "expression": {
                                      "arguments": [
                                          {
                                              "commonType": {
                                                  "typeIdentifier": "t_address",
                                                  "typeString": "address"
                                              },
                                              "id": 103,
                                              "isConstant": false,
                                              "isLValue": false,
                                              "isPure": false,
                                              "lValueRequested": false,
                                              "leftExpression": {
                                                  "expression": {
                                                      "id": 100,
                                                      "name": "msg",
                                                      "nodeType": "Identifier",
                                                      "overloadedDeclarations": [],
                                                      "referencedDeclaration": 4294967281,
                                                      "src": "1658:3:0",
                                                      "typeDescriptions": {
                                                          "typeIdentifier": "t_magic_message",
                                                          "typeString": "msg"
                                                      }
                                                  },
                                                  "id": 101,
                                                  "isConstant": false,
                                                  "isLValue": false,
                                                  "isPure": false,
                                                  "lValueRequested": false,
                                                  "memberLocation": "1662:6:0",
                                                  "memberName": "sender",
                                                  "nodeType": "MemberAccess",
                                                  "src": "1658:10:0",
                                                  "typeDescriptions": {
                                                      "typeIdentifier": "t_address",
                                                      "typeString": "address"
                                                  }
                                              },
                                              "nodeType": "BinaryOperation",
                                              "operator": "==",
                                              "rightExpression": {
                                                  "id": 102,
                                                  "name": "companyAcc",
                                                  "nodeType": "Identifier",
                                                  "overloadedDeclarations": [],
                                                  "referencedDeclaration": 61,
                                                  "src": "1672:10:0",
                                                  "typeDescriptions": {
                                                      "typeIdentifier": "t_address",
                                                      "typeString": "address"
                                                  }
                                              },
                                              "src": "1658:24:0",
                                              "typeDescriptions": {
                                                  "typeIdentifier": "t_bool",
                                                  "typeString": "bool"
                                              }
                                          },
                                          {
                                              "hexValue": "4f776e6572207265736572766564206f6e6c79",
                                              "id": 104,
                                              "isConstant": false,
                                              "isLValue": false,
                                              "isPure": true,
                                              "kind": "string",
                                              "lValueRequested": false,
                                              "nodeType": "Literal",
                                              "src": "1684:21:0",
                                              "typeDescriptions": {
                                                  "typeIdentifier": "t_stringliteral_b690911e837e73672a6ec728325f450ccb873f130672158242039ea4772ec22d",
                                                  "typeString": "literal_string \"Owner reserved only\""
                                              },
                                              "value": "Owner reserved only"
                                          }
                                      ],
                                      "expression": {
                                          "argumentTypes": [
                                              {
                                                  "typeIdentifier": "t_bool",
                                                  "typeString": "bool"
                                              },
                                              {
                                                  "typeIdentifier": "t_stringliteral_b690911e837e73672a6ec728325f450ccb873f130672158242039ea4772ec22d",
                                                  "typeString": "literal_string \"Owner reserved only\""
                                              }
                                          ],
                                          "id": 99,
                                          "name": "require",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [
                                              4294967278,
                                              4294967278
                                          ],
                                          "referencedDeclaration": 4294967278,
                                          "src": "1650:7:0",
                                          "typeDescriptions": {
                                              "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                              "typeString": "function (bool,string memory) pure"
                                          }
                                      },
                                      "id": 105,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "kind": "functionCall",
                                      "lValueRequested": false,
                                      "nameLocations": [],
                                      "names": [],
                                      "nodeType": "FunctionCall",
                                      "src": "1650:56:0",
                                      "tryCall": false,
                                      "typeDescriptions": {
                                          "typeIdentifier": "t_tuple$__$",
                                          "typeString": "tuple()"
                                      }
                                  },
                                  "id": 106,
                                  "nodeType": "ExpressionStatement",
                                  "src": "1650:56:0"
                              },
                              {
                                  "id": 107,
                                  "nodeType": "PlaceholderStatement",
                                  "src": "1717:1:0"
                              }
                          ]
                      },
                      "id": 109,
                      "name": "ownerOnly",
                      "nameLocation": "1628:9:0",
                      "nodeType": "ModifierDefinition",
                      "parameters": {
                          "id": 98,
                          "nodeType": "ParameterList",
                          "parameters": [],
                          "src": "1637:2:0"
                      },
                      "src": "1619:107:0",
                      "virtual": false,
                      "visibility": "internal"
                  },
                  {
                      "body": {
                          "id": 142,
                          "nodeType": "Block",
                          "src": "1819:167:0",
                          "statements": [
                              {
                                  "expression": {
                                      "id": 125,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "leftHandSide": {
                                          "id": 118,
                                          "name": "paymentToken",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 59,
                                          "src": "1830:12:0",
                                          "typeDescriptions": {
                                              "typeIdentifier": "t_contract$_PayrollToken_$56",
                                              "typeString": "contract PayrollToken"
                                          }
                                      },
                                      "nodeType": "Assignment",
                                      "operator": "=",
                                      "rightHandSide": {
                                          "arguments": [
                                              {
                                                  "id": 122,
                                                  "name": "tokenName",
                                                  "nodeType": "Identifier",
                                                  "overloadedDeclarations": [],
                                                  "referencedDeclaration": 111,
                                                  "src": "1862:9:0",
                                                  "typeDescriptions": {
                                                      "typeIdentifier": "t_string_memory_ptr",
                                                      "typeString": "string memory"
                                                  }
                                              },
                                              {
                                                  "id": 123,
                                                  "name": "tokenSymbol",
                                                  "nodeType": "Identifier",
                                                  "overloadedDeclarations": [],
                                                  "referencedDeclaration": 113,
                                                  "src": "1873:11:0",
                                                  "typeDescriptions": {
                                                      "typeIdentifier": "t_string_memory_ptr",
                                                      "typeString": "string memory"
                                                  }
                                              }
                                          ],
                                          "expression": {
                                              "argumentTypes": [
                                                  {
                                                      "typeIdentifier": "t_string_memory_ptr",
                                                      "typeString": "string memory"
                                                  },
                                                  {
                                                      "typeIdentifier": "t_string_memory_ptr",
                                                      "typeString": "string memory"
                                                  }
                                              ],
                                              "id": 121,
                                              "isConstant": false,
                                              "isLValue": false,
                                              "isPure": false,
                                              "lValueRequested": false,
                                              "nodeType": "NewExpression",
                                              "src": "1845:16:0",
                                              "typeDescriptions": {
                                                  "typeIdentifier": "t_function_creation_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_contract$_PayrollToken_$56_$",
                                                  "typeString": "function (string memory,string memory) returns (contract PayrollToken)"
                                              },
                                              "typeName": {
                                                  "id": 120,
                                                  "nodeType": "UserDefinedTypeName",
                                                  "pathNode": {
                                                      "id": 119,
                                                      "name": "PayrollToken",
                                                      "nameLocations": [
                                                          "1849:12:0"
                                                      ],
                                                      "nodeType": "IdentifierPath",
                                                      "referencedDeclaration": 56,
                                                      "src": "1849:12:0"
                                                  },
                                                  "referencedDeclaration": 56,
                                                  "src": "1849:12:0",
                                                  "typeDescriptions": {
                                                      "typeIdentifier": "t_contract$_PayrollToken_$56",
                                                      "typeString": "contract PayrollToken"
                                                  }
                                              }
                                          },
                                          "id": 124,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "kind": "functionCall",
                                          "lValueRequested": false,
                                          "nameLocations": [],
                                          "names": [],
                                          "nodeType": "FunctionCall",
                                          "src": "1845:40:0",
                                          "tryCall": false,
                                          "typeDescriptions": {
                                              "typeIdentifier": "t_contract$_PayrollToken_$56",
                                              "typeString": "contract PayrollToken"
                                          }
                                      },
                                      "src": "1830:55:0",
                                      "typeDescriptions": {
                                          "typeIdentifier": "t_contract$_PayrollToken_$56",
                                          "typeString": "contract PayrollToken"
                                      }
                                  },
                                  "id": 126,
                                  "nodeType": "ExpressionStatement",
                                  "src": "1830:55:0"
                              },
                              {
                                  "expression": {
                                      "id": 130,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "leftHandSide": {
                                          "id": 127,
                                          "name": "companyAcc",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 61,
                                          "src": "1896:10:0",
                                          "typeDescriptions": {
                                              "typeIdentifier": "t_address",
                                              "typeString": "address"
                                          }
                                      },
                                      "nodeType": "Assignment",
                                      "operator": "=",
                                      "rightHandSide": {
                                          "expression": {
                                              "id": 128,
                                              "name": "msg",
                                              "nodeType": "Identifier",
                                              "overloadedDeclarations": [],
                                              "referencedDeclaration": 4294967281,
                                              "src": "1909:3:0",
                                              "typeDescriptions": {
                                                  "typeIdentifier": "t_magic_message",
                                                  "typeString": "msg"
                                              }
                                          },
                                          "id": 129,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "memberLocation": "1913:6:0",
                                          "memberName": "sender",
                                          "nodeType": "MemberAccess",
                                          "src": "1909:10:0",
                                          "typeDescriptions": {
                                              "typeIdentifier": "t_address",
                                              "typeString": "address"
                                          }
                                      },
                                      "src": "1896:23:0",
                                      "typeDescriptions": {
                                          "typeIdentifier": "t_address",
                                          "typeString": "address"
                                      }
                                  },
                                  "id": 131,
                                  "nodeType": "ExpressionStatement",
                                  "src": "1896:23:0"
                              },
                              {
                                  "expression": {
                                      "arguments": [
                                          {
                                              "arguments": [
                                                  {
                                                      "id": 137,
                                                      "name": "this",
                                                      "nodeType": "Identifier",
                                                      "overloadedDeclarations": [],
                                                      "referencedDeclaration": 4294967268,
                                                      "src": "1956:4:0",
                                                      "typeDescriptions": {
                                                          "typeIdentifier": "t_contract$_Payroll_$298",
                                                          "typeString": "contract Payroll"
                                                      }
                                                  }
                                              ],
                                              "expression": {
                                                  "argumentTypes": [
                                                      {
                                                          "typeIdentifier": "t_contract$_Payroll_$298",
                                                          "typeString": "contract Payroll"
                                                      }
                                                  ],
                                                  "id": 136,
                                                  "isConstant": false,
                                                  "isLValue": false,
                                                  "isPure": true,
                                                  "lValueRequested": false,
                                                  "nodeType": "ElementaryTypeNameExpression",
                                                  "src": "1948:7:0",
                                                  "typeDescriptions": {
                                                      "typeIdentifier": "t_type$_t_address_$",
                                                      "typeString": "type(address)"
                                                  },
                                                  "typeName": {
                                                      "id": 135,
                                                      "name": "address",
                                                      "nodeType": "ElementaryTypeName",
                                                      "src": "1948:7:0",
                                                      "typeDescriptions": {}
                                                  }
                                              },
                                              "id": 138,
                                              "isConstant": false,
                                              "isLValue": false,
                                              "isPure": false,
                                              "kind": "typeConversion",
                                              "lValueRequested": false,
                                              "nameLocations": [],
                                              "names": [],
                                              "nodeType": "FunctionCall",
                                              "src": "1948:13:0",
                                              "tryCall": false,
                                              "typeDescriptions": {
                                                  "typeIdentifier": "t_address",
                                                  "typeString": "address"
                                              }
                                          },
                                          {
                                              "id": 139,
                                              "name": "initialCapital",
                                              "nodeType": "Identifier",
                                              "overloadedDeclarations": [],
                                              "referencedDeclaration": 115,
                                              "src": "1963:14:0",
                                              "typeDescriptions": {
                                                  "typeIdentifier": "t_uint256",
                                                  "typeString": "uint256"
                                              }
                                          }
                                      ],
                                      "expression": {
                                          "argumentTypes": [
                                              {
                                                  "typeIdentifier": "t_address",
                                                  "typeString": "address"
                                              },
                                              {
                                                  "typeIdentifier": "t_uint256",
                                                  "typeString": "uint256"
                                              }
                                          ],
                                          "expression": {
                                              "id": 132,
                                              "name": "paymentToken",
                                              "nodeType": "Identifier",
                                              "overloadedDeclarations": [],
                                              "referencedDeclaration": 59,
                                              "src": "1930:12:0",
                                              "typeDescriptions": {
                                                  "typeIdentifier": "t_contract$_PayrollToken_$56",
                                                  "typeString": "contract PayrollToken"
                                              }
                                          },
                                          "id": 134,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "memberLocation": "1943:4:0",
                                          "memberName": "mint",
                                          "nodeType": "MemberAccess",
                                          "referencedDeclaration": 55,
                                          "src": "1930:17:0",
                                          "typeDescriptions": {
                                              "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$__$",
                                              "typeString": "function (address,uint256) external"
                                          }
                                      },
                                      "id": 140,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "kind": "functionCall",
                                      "lValueRequested": false,
                                      "nameLocations": [],
                                      "names": [],
                                      "nodeType": "FunctionCall",
                                      "src": "1930:48:0",
                                      "tryCall": false,
                                      "typeDescriptions": {
                                          "typeIdentifier": "t_tuple$__$",
                                          "typeString": "tuple()"
                                      }
                                  },
                                  "id": 141,
                                  "nodeType": "ExpressionStatement",
                                  "src": "1930:48:0"
                              }
                          ]
                      },
                      "id": 143,
                      "implemented": true,
                      "kind": "constructor",
                      "modifiers": [],
                      "name": "",
                      "nameLocation": "-1:-1:-1",
                      "nodeType": "FunctionDefinition",
                      "parameters": {
                          "id": 116,
                          "nodeType": "ParameterList",
                          "parameters": [
                              {
                                  "constant": false,
                                  "id": 111,
                                  "mutability": "mutable",
                                  "name": "tokenName",
                                  "nameLocation": "1760:9:0",
                                  "nodeType": "VariableDeclaration",
                                  "scope": 143,
                                  "src": "1746:23:0",
                                  "stateVariable": false,
                                  "storageLocation": "memory",
                                  "typeDescriptions": {
                                      "typeIdentifier": "t_string_memory_ptr",
                                      "typeString": "string"
                                  },
                                  "typeName": {
                                      "id": 110,
                                      "name": "string",
                                      "nodeType": "ElementaryTypeName",
                                      "src": "1746:6:0",
                                      "typeDescriptions": {
                                          "typeIdentifier": "t_string_storage_ptr",
                                          "typeString": "string"
                                      }
                                  },
                                  "visibility": "internal"
                              },
                              {
                                  "constant": false,
                                  "id": 113,
                                  "mutability": "mutable",
                                  "name": "tokenSymbol",
                                  "nameLocation": "1785:11:0",
                                  "nodeType": "VariableDeclaration",
                                  "scope": 143,
                                  "src": "1771:25:0",
                                  "stateVariable": false,
                                  "storageLocation": "memory",
                                  "typeDescriptions": {
                                      "typeIdentifier": "t_string_memory_ptr",
                                      "typeString": "string"
                                  },
                                  "typeName": {
                                      "id": 112,
                                      "name": "string",
                                      "nodeType": "ElementaryTypeName",
                                      "src": "1771:6:0",
                                      "typeDescriptions": {
                                          "typeIdentifier": "t_string_storage_ptr",
                                          "typeString": "string"
                                      }
                                  },
                                  "visibility": "internal"
                              },
                              {
                                  "constant": false,
                                  "id": 115,
                                  "mutability": "mutable",
                                  "name": "initialCapital",
                                  "nameLocation": "1803:14:0",
                                  "nodeType": "VariableDeclaration",
                                  "scope": 143,
                                  "src": "1798:19:0",
                                  "stateVariable": false,
                                  "storageLocation": "default",
                                  "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                  },
                                  "typeName": {
                                      "id": 114,
                                      "name": "uint",
                                      "nodeType": "ElementaryTypeName",
                                      "src": "1798:4:0",
                                      "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                      }
                                  },
                                  "visibility": "internal"
                              }
                          ],
                          "src": "1745:73:0"
                      },
                      "returnParameters": {
                          "id": 117,
                          "nodeType": "ParameterList",
                          "parameters": [],
                          "src": "1819:0:0"
                      },
                      "scope": 298,
                      "src": "1734:252:0",
                      "stateMutability": "nonpayable",
                      "virtual": false,
                      "visibility": "public"
                  },
                  {
                      "body": {
                          "id": 196,
                          "nodeType": "Block",
                          "src": "2082:473:0",
                          "statements": [
                              {
                                  "expression": {
                                      "arguments": [
                                          {
                                              "commonType": {
                                                  "typeIdentifier": "t_uint256",
                                                  "typeString": "uint256"
                                              },
                                              "id": 157,
                                              "isConstant": false,
                                              "isLValue": false,
                                              "isPure": false,
                                              "lValueRequested": false,
                                              "leftExpression": {
                                                  "id": 155,
                                                  "name": "salary",
                                                  "nodeType": "Identifier",
                                                  "overloadedDeclarations": [],
                                                  "referencedDeclaration": 147,
                                                  "src": "2101:6:0",
                                                  "typeDescriptions": {
                                                      "typeIdentifier": "t_uint256",
                                                      "typeString": "uint256"
                                                  }
                                              },
                                              "nodeType": "BinaryOperation",
                                              "operator": ">",
                                              "rightExpression": {
                                                  "hexValue": "30",
                                                  "id": 156,
                                                  "isConstant": false,
                                                  "isLValue": false,
                                                  "isPure": true,
                                                  "kind": "number",
                                                  "lValueRequested": false,
                                                  "nodeType": "Literal",
                                                  "src": "2110:1:0",
                                                  "typeDescriptions": {
                                                      "typeIdentifier": "t_rational_0_by_1",
                                                      "typeString": "int_const 0"
                                                  },
                                                  "value": "0"
                                              },
                                              "src": "2101:10:0",
                                              "typeDescriptions": {
                                                  "typeIdentifier": "t_bool",
                                                  "typeString": "bool"
                                              }
                                          },
                                          {
                                              "hexValue": "53616c6172792063616e6e6f74206265207a65726f21",
                                              "id": 158,
                                              "isConstant": false,
                                              "isLValue": false,
                                              "isPure": true,
                                              "kind": "string",
                                              "lValueRequested": false,
                                              "nodeType": "Literal",
                                              "src": "2113:24:0",
                                              "typeDescriptions": {
                                                  "typeIdentifier": "t_stringliteral_aefbb8ff2f962dadda0fa8efe2862ad8f58552d05b84cea47d630a666d9b4771",
                                                  "typeString": "literal_string \"Salary cannot be zero!\""
                                              },
                                              "value": "Salary cannot be zero!"
                                          }
                                      ],
                                      "expression": {
                                          "argumentTypes": [
                                              {
                                                  "typeIdentifier": "t_bool",
                                                  "typeString": "bool"
                                              },
                                              {
                                                  "typeIdentifier": "t_stringliteral_aefbb8ff2f962dadda0fa8efe2862ad8f58552d05b84cea47d630a666d9b4771",
                                                  "typeString": "literal_string \"Salary cannot be zero!\""
                                              }
                                          ],
                                          "id": 154,
                                          "name": "require",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [
                                              4294967278,
                                              4294967278
                                          ],
                                          "referencedDeclaration": 4294967278,
                                          "src": "2093:7:0",
                                          "typeDescriptions": {
                                              "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                              "typeString": "function (bool,string memory) pure"
                                          }
                                      },
                                      "id": 159,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "kind": "functionCall",
                                      "lValueRequested": false,
                                      "nameLocations": [],
                                      "names": [],
                                      "nodeType": "FunctionCall",
                                      "src": "2093:45:0",
                                      "tryCall": false,
                                      "typeDescriptions": {
                                          "typeIdentifier": "t_tuple$__$",
                                          "typeString": "tuple()"
                                      }
                                  },
                                  "id": 160,
                                  "nodeType": "ExpressionStatement",
                                  "src": "2093:45:0"
                              },
                              {
                                  "expression": {
                                      "arguments": [
                                          {
                                              "id": 165,
                                              "isConstant": false,
                                              "isLValue": false,
                                              "isPure": false,
                                              "lValueRequested": false,
                                              "nodeType": "UnaryOperation",
                                              "operator": "!",
                                              "prefix": true,
                                              "src": "2157:21:0",
                                              "subExpression": {
                                                  "baseExpression": {
                                                      "id": 162,
                                                      "name": "IsEmployee",
                                                      "nodeType": "Identifier",
                                                      "overloadedDeclarations": [],
                                                      "referencedDeclaration": 74,
                                                      "src": "2158:10:0",
                                                      "typeDescriptions": {
                                                          "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                                                          "typeString": "mapping(address => bool)"
                                                      }
                                                  },
                                                  "id": 164,
                                                  "indexExpression": {
                                                      "id": 163,
                                                      "name": "employee",
                                                      "nodeType": "Identifier",
                                                      "overloadedDeclarations": [],
                                                      "referencedDeclaration": 145,
                                                      "src": "2169:8:0",
                                                      "typeDescriptions": {
                                                          "typeIdentifier": "t_address",
                                                          "typeString": "address"
                                                      }
                                                  },
                                                  "isConstant": false,
                                                  "isLValue": true,
                                                  "isPure": false,
                                                  "lValueRequested": false,
                                                  "nodeType": "IndexAccess",
                                                  "src": "2158:20:0",
                                                  "typeDescriptions": {
                                                      "typeIdentifier": "t_bool",
                                                      "typeString": "bool"
                                                  }
                                              },
                                              "typeDescriptions": {
                                                  "typeIdentifier": "t_bool",
                                                  "typeString": "bool"
                                              }
                                          },
                                          {
                                              "hexValue": "456d706c6f79656520616c726561647920696e20706179726f6c6c21",
                                              "id": 166,
                                              "isConstant": false,
                                              "isLValue": false,
                                              "isPure": true,
                                              "kind": "string",
                                              "lValueRequested": false,
                                              "nodeType": "Literal",
                                              "src": "2180:30:0",
                                              "typeDescriptions": {
                                                  "typeIdentifier": "t_stringliteral_9d4fc38ffeaad3fd0c99460ab2dbb3965ba7e06d5453a8429178057c5f2cb4ee",
                                                  "typeString": "literal_string \"Employee already in payroll!\""
                                              },
                                              "value": "Employee already in payroll!"
                                          }
                                      ],
                                      "expression": {
                                          "argumentTypes": [
                                              {
                                                  "typeIdentifier": "t_bool",
                                                  "typeString": "bool"
                                              },
                                              {
                                                  "typeIdentifier": "t_stringliteral_9d4fc38ffeaad3fd0c99460ab2dbb3965ba7e06d5453a8429178057c5f2cb4ee",
                                                  "typeString": "literal_string \"Employee already in payroll!\""
                                              }
                                          ],
                                          "id": 161,
                                          "name": "require",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [
                                              4294967278,
                                              4294967278
                                          ],
                                          "referencedDeclaration": 4294967278,
                                          "src": "2149:7:0",
                                          "typeDescriptions": {
                                              "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                              "typeString": "function (bool,string memory) pure"
                                          }
                                      },
                                      "id": 167,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "kind": "functionCall",
                                      "lValueRequested": false,
                                      "nameLocations": [],
                                      "names": [],
                                      "nodeType": "FunctionCall",
                                      "src": "2149:62:0",
                                      "tryCall": false,
                                      "typeDescriptions": {
                                          "typeIdentifier": "t_tuple$__$",
                                          "typeString": "tuple()"
                                      }
                                  },
                                  "id": 168,
                                  "nodeType": "ExpressionStatement",
                                  "src": "2149:62:0"
                              },
                              {
                                  "expression": {
                                      "id": 170,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "nodeType": "UnaryOperation",
                                      "operator": "++",
                                      "prefix": false,
                                      "src": "2228:16:0",
                                      "subExpression": {
                                          "id": 169,
                                          "name": "totalEmployees",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 64,
                                          "src": "2228:14:0",
                                          "typeDescriptions": {
                                              "typeIdentifier": "t_uint256",
                                              "typeString": "uint256"
                                          }
                                      },
                                      "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                      }
                                  },
                                  "id": 171,
                                  "nodeType": "ExpressionStatement",
                                  "src": "2228:16:0"
                              },
                              {
                                  "expression": {
                                      "id": 174,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "leftHandSide": {
                                          "id": 172,
                                          "name": "totalSalary",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 67,
                                          "src": "2255:11:0",
                                          "typeDescriptions": {
                                              "typeIdentifier": "t_uint256",
                                              "typeString": "uint256"
                                          }
                                      },
                                      "nodeType": "Assignment",
                                      "operator": "+=",
                                      "rightHandSide": {
                                          "id": 173,
                                          "name": "salary",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 147,
                                          "src": "2270:6:0",
                                          "typeDescriptions": {
                                              "typeIdentifier": "t_uint256",
                                              "typeString": "uint256"
                                          }
                                      },
                                      "src": "2255:21:0",
                                      "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                      }
                                  },
                                  "id": 175,
                                  "nodeType": "ExpressionStatement",
                                  "src": "2255:21:0"
                              },
                              {
                                  "expression": {
                                      "id": 180,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "leftHandSide": {
                                          "baseExpression": {
                                              "id": 176,
                                              "name": "IsEmployee",
                                              "nodeType": "Identifier",
                                              "overloadedDeclarations": [],
                                              "referencedDeclaration": 74,
                                              "src": "2287:10:0",
                                              "typeDescriptions": {
                                                  "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                                                  "typeString": "mapping(address => bool)"
                                              }
                                          },
                                          "id": 178,
                                          "indexExpression": {
                                              "id": 177,
                                              "name": "employee",
                                              "nodeType": "Identifier",
                                              "overloadedDeclarations": [],
                                              "referencedDeclaration": 145,
                                              "src": "2298:8:0",
                                              "typeDescriptions": {
                                                  "typeIdentifier": "t_address",
                                                  "typeString": "address"
                                              }
                                          },
                                          "isConstant": false,
                                          "isLValue": true,
                                          "isPure": false,
                                          "lValueRequested": true,
                                          "nodeType": "IndexAccess",
                                          "src": "2287:20:0",
                                          "typeDescriptions": {
                                              "typeIdentifier": "t_bool",
                                              "typeString": "bool"
                                          }
                                      },
                                      "nodeType": "Assignment",
                                      "operator": "=",
                                      "rightHandSide": {
                                          "hexValue": "74727565",
                                          "id": 179,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": true,
                                          "kind": "bool",
                                          "lValueRequested": false,
                                          "nodeType": "Literal",
                                          "src": "2310:4:0",
                                          "typeDescriptions": {
                                              "typeIdentifier": "t_bool",
                                              "typeString": "bool"
                                          },
                                          "value": "true"
                                      },
                                      "src": "2287:27:0",
                                      "typeDescriptions": {
                                          "typeIdentifier": "t_bool",
                                          "typeString": "bool"
                                      }
                                  },
                                  "id": 181,
                                  "nodeType": "ExpressionStatement",
                                  "src": "2287:27:0"
                              },
                              {
                                  "expression": {
                                      "arguments": [
                                          {
                                              "arguments": [
                                                  {
                                                      "id": 186,
                                                      "name": "totalEmployees",
                                                      "nodeType": "Identifier",
                                                      "overloadedDeclarations": [],
                                                      "referencedDeclaration": 64,
                                                      "src": "2389:14:0",
                                                      "typeDescriptions": {
                                                          "typeIdentifier": "t_uint256",
                                                          "typeString": "uint256"
                                                      }
                                                  },
                                                  {
                                                      "id": 187,
                                                      "name": "employee",
                                                      "nodeType": "Identifier",
                                                      "overloadedDeclarations": [],
                                                      "referencedDeclaration": 145,
                                                      "src": "2422:8:0",
                                                      "typeDescriptions": {
                                                          "typeIdentifier": "t_address",
                                                          "typeString": "address"
                                                      }
                                                  },
                                                  {
                                                      "id": 188,
                                                      "name": "salary",
                                                      "nodeType": "Identifier",
                                                      "overloadedDeclarations": [],
                                                      "referencedDeclaration": 147,
                                                      "src": "2449:6:0",
                                                      "typeDescriptions": {
                                                          "typeIdentifier": "t_uint256",
                                                          "typeString": "uint256"
                                                      }
                                                  },
                                                  {
                                                      "expression": {
                                                          "id": 189,
                                                          "name": "block",
                                                          "nodeType": "Identifier",
                                                          "overloadedDeclarations": [],
                                                          "referencedDeclaration": 4294967292,
                                                          "src": "2474:5:0",
                                                          "typeDescriptions": {
                                                              "typeIdentifier": "t_magic_block",
                                                              "typeString": "block"
                                                          }
                                                      },
                                                      "id": 190,
                                                      "isConstant": false,
                                                      "isLValue": false,
                                                      "isPure": false,
                                                      "lValueRequested": false,
                                                      "memberLocation": "2480:9:0",
                                                      "memberName": "timestamp",
                                                      "nodeType": "MemberAccess",
                                                      "src": "2474:15:0",
                                                      "typeDescriptions": {
                                                          "typeIdentifier": "t_uint256",
                                                          "typeString": "uint256"
                                                      }
                                                  }
                                              ],
                                              "expression": {
                                                  "argumentTypes": [
                                                      {
                                                          "typeIdentifier": "t_uint256",
                                                          "typeString": "uint256"
                                                      },
                                                      {
                                                          "typeIdentifier": "t_address",
                                                          "typeString": "address"
                                                      },
                                                      {
                                                          "typeIdentifier": "t_uint256",
                                                          "typeString": "uint256"
                                                      },
                                                      {
                                                          "typeIdentifier": "t_uint256",
                                                          "typeString": "uint256"
                                                      }
                                                  ],
                                                  "id": 185,
                                                  "name": "EmployeeStruct",
                                                  "nodeType": "Identifier",
                                                  "overloadedDeclarations": [],
                                                  "referencedDeclaration": 93,
                                                  "src": "2356:14:0",
                                                  "typeDescriptions": {
                                                      "typeIdentifier": "t_type$_t_struct$_EmployeeStruct_$93_storage_ptr_$",
                                                      "typeString": "type(struct Payroll.EmployeeStruct storage pointer)"
                                                  }
                                              },
                                              "id": 191,
                                              "isConstant": false,
                                              "isLValue": false,
                                              "isPure": false,
                                              "kind": "structConstructorCall",
                                              "lValueRequested": false,
                                              "nameLocations": [],
                                              "names": [],
                                              "nodeType": "FunctionCall",
                                              "src": "2356:148:0",
                                              "tryCall": false,
                                              "typeDescriptions": {
                                                  "typeIdentifier": "t_struct$_EmployeeStruct_$93_memory_ptr",
                                                  "typeString": "struct Payroll.EmployeeStruct memory"
                                              }
                                          }
                                      ],
                                      "expression": {
                                          "argumentTypes": [
                                              {
                                                  "typeIdentifier": "t_struct$_EmployeeStruct_$93_memory_ptr",
                                                  "typeString": "struct Payroll.EmployeeStruct memory"
                                              }
                                          ],
                                          "expression": {
                                              "id": 182,
                                              "name": "employees",
                                              "nodeType": "Identifier",
                                              "overloadedDeclarations": [],
                                              "referencedDeclaration": 97,
                                              "src": "2327:9:0",
                                              "typeDescriptions": {
                                                  "typeIdentifier": "t_array$_t_struct$_EmployeeStruct_$93_storage_$dyn_storage",
                                                  "typeString": "struct Payroll.EmployeeStruct storage ref[] storage ref"
                                              }
                                          },
                                          "id": 184,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "memberLocation": "2337:4:0",
                                          "memberName": "push",
                                          "nodeType": "MemberAccess",
                                          "src": "2327:14:0",
                                          "typeDescriptions": {
                                              "typeIdentifier": "t_function_arraypush_nonpayable$_t_array$_t_struct$_EmployeeStruct_$93_storage_$dyn_storage_ptr_$_t_struct$_EmployeeStruct_$93_storage_$returns$__$bound_to$_t_array$_t_struct$_EmployeeStruct_$93_storage_$dyn_storage_ptr_$",
                                              "typeString": "function (struct Payroll.EmployeeStruct storage ref[] storage pointer,struct Payroll.EmployeeStruct storage ref)"
                                          }
                                      },
                                      "id": 192,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "kind": "functionCall",
                                      "lValueRequested": false,
                                      "nameLocations": [],
                                      "names": [],
                                      "nodeType": "FunctionCall",
                                      "src": "2327:188:0",
                                      "tryCall": false,
                                      "typeDescriptions": {
                                          "typeIdentifier": "t_tuple$__$",
                                          "typeString": "tuple()"
                                      }
                                  },
                                  "id": 193,
                                  "nodeType": "ExpressionStatement",
                                  "src": "2327:188:0"
                              },
                              {
                                  "expression": {
                                      "hexValue": "74727565",
                                      "id": 194,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "kind": "bool",
                                      "lValueRequested": false,
                                      "nodeType": "Literal",
                                      "src": "2543:4:0",
                                      "typeDescriptions": {
                                          "typeIdentifier": "t_bool",
                                          "typeString": "bool"
                                      },
                                      "value": "true"
                                  },
                                  "functionReturnParameters": 153,
                                  "id": 195,
                                  "nodeType": "Return",
                                  "src": "2536:11:0"
                              }
                          ]
                      },
                      "functionSelector": "813d9139",
                      "id": 197,
                      "implemented": true,
                      "kind": "function",
                      "modifiers": [
                          {
                              "id": 150,
                              "kind": "modifierInvocation",
                              "modifierName": {
                                  "id": 149,
                                  "name": "ownerOnly",
                                  "nameLocations": [
                                      "2057:9:0"
                                  ],
                                  "nodeType": "IdentifierPath",
                                  "referencedDeclaration": 109,
                                  "src": "2057:9:0"
                              },
                              "nodeType": "ModifierInvocation",
                              "src": "2057:9:0"
                          }
                      ],
                      "name": "addEmployees",
                      "nameLocation": "2003:12:0",
                      "nodeType": "FunctionDefinition",
                      "parameters": {
                          "id": 148,
                          "nodeType": "ParameterList",
                          "parameters": [
                              {
                                  "constant": false,
                                  "id": 145,
                                  "mutability": "mutable",
                                  "name": "employee",
                                  "nameLocation": "2025:8:0",
                                  "nodeType": "VariableDeclaration",
                                  "scope": 197,
                                  "src": "2017:16:0",
                                  "stateVariable": false,
                                  "storageLocation": "default",
                                  "typeDescriptions": {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                  },
                                  "typeName": {
                                      "id": 144,
                                      "name": "address",
                                      "nodeType": "ElementaryTypeName",
                                      "src": "2017:7:0",
                                      "stateMutability": "nonpayable",
                                      "typeDescriptions": {
                                          "typeIdentifier": "t_address",
                                          "typeString": "address"
                                      }
                                  },
                                  "visibility": "internal"
                              },
                              {
                                  "constant": false,
                                  "id": 147,
                                  "mutability": "mutable",
                                  "name": "salary",
                                  "nameLocation": "2042:6:0",
                                  "nodeType": "VariableDeclaration",
                                  "scope": 197,
                                  "src": "2034:14:0",
                                  "stateVariable": false,
                                  "storageLocation": "default",
                                  "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                  },
                                  "typeName": {
                                      "id": 146,
                                      "name": "uint256",
                                      "nodeType": "ElementaryTypeName",
                                      "src": "2034:7:0",
                                      "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                      }
                                  },
                                  "visibility": "internal"
                              }
                          ],
                          "src": "2015:34:0"
                      },
                      "returnParameters": {
                          "id": 153,
                          "nodeType": "ParameterList",
                          "parameters": [
                              {
                                  "constant": false,
                                  "id": 152,
                                  "mutability": "mutable",
                                  "name": "",
                                  "nameLocation": "-1:-1:-1",
                                  "nodeType": "VariableDeclaration",
                                  "scope": 197,
                                  "src": "2076:4:0",
                                  "stateVariable": false,
                                  "storageLocation": "default",
                                  "typeDescriptions": {
                                      "typeIdentifier": "t_bool",
                                      "typeString": "bool"
                                  },
                                  "typeName": {
                                      "id": 151,
                                      "name": "bool",
                                      "nodeType": "ElementaryTypeName",
                                      "src": "2076:4:0",
                                      "typeDescriptions": {
                                          "typeIdentifier": "t_bool",
                                          "typeString": "bool"
                                      }
                                  },
                                  "visibility": "internal"
                              }
                          ],
                          "src": "2075:6:0"
                      },
                      "scope": 298,
                      "src": "1994:561:0",
                      "stateMutability": "nonpayable",
                      "virtual": false,
                      "visibility": "public"
                  },
                  {
                      "body": {
                          "id": 243,
                          "nodeType": "Block",
                          "src": "2634:284:0",
                          "statements": [
                              {
                                  "body": {
                                      "id": 239,
                                      "nodeType": "Block",
                                      "src": "2689:199:0",
                                      "statements": [
                                          {
                                              "condition": {
                                                  "commonType": {
                                                      "typeIdentifier": "t_uint256",
                                                      "typeString": "uint256"
                                                  },
                                                  "id": 222,
                                                  "isConstant": false,
                                                  "isLValue": false,
                                                  "isPure": false,
                                                  "lValueRequested": false,
                                                  "leftExpression": {
                                                      "expression": {
                                                          "baseExpression": {
                                                              "id": 217,
                                                              "name": "employees",
                                                              "nodeType": "Identifier",
                                                              "overloadedDeclarations": [],
                                                              "referencedDeclaration": 97,
                                                              "src": "2708:9:0",
                                                              "typeDescriptions": {
                                                                  "typeIdentifier": "t_array$_t_struct$_EmployeeStruct_$93_storage_$dyn_storage",
                                                                  "typeString": "struct Payroll.EmployeeStruct storage ref[] storage ref"
                                                              }
                                                          },
                                                          "id": 219,
                                                          "indexExpression": {
                                                              "id": 218,
                                                              "name": "i",
                                                              "nodeType": "Identifier",
                                                              "overloadedDeclarations": [],
                                                              "referencedDeclaration": 207,
                                                              "src": "2718:1:0",
                                                              "typeDescriptions": {
                                                                  "typeIdentifier": "t_uint256",
                                                                  "typeString": "uint256"
                                                              }
                                                          },
                                                          "isConstant": false,
                                                          "isLValue": true,
                                                          "isPure": false,
                                                          "lValueRequested": false,
                                                          "nodeType": "IndexAccess",
                                                          "src": "2708:12:0",
                                                          "typeDescriptions": {
                                                              "typeIdentifier": "t_struct$_EmployeeStruct_$93_storage",
                                                              "typeString": "struct Payroll.EmployeeStruct storage ref"
                                                          }
                                                      },
                                                      "id": 220,
                                                      "isConstant": false,
                                                      "isLValue": true,
                                                      "isPure": false,
                                                      "lValueRequested": false,
                                                      "memberLocation": "2721:2:0",
                                                      "memberName": "id",
                                                      "nodeType": "MemberAccess",
                                                      "referencedDeclaration": 86,
                                                      "src": "2708:15:0",
                                                      "typeDescriptions": {
                                                          "typeIdentifier": "t_uint256",
                                                          "typeString": "uint256"
                                                      }
                                                  },
                                                  "nodeType": "BinaryOperation",
                                                  "operator": "==",
                                                  "rightExpression": {
                                                      "id": 221,
                                                      "name": "employeeId",
                                                      "nodeType": "Identifier",
                                                      "overloadedDeclarations": [],
                                                      "referencedDeclaration": 199,
                                                      "src": "2727:10:0",
                                                      "typeDescriptions": {
                                                          "typeIdentifier": "t_uint256",
                                                          "typeString": "uint256"
                                                      }
                                                  },
                                                  "src": "2708:29:0",
                                                  "typeDescriptions": {
                                                      "typeIdentifier": "t_bool",
                                                      "typeString": "bool"
                                                  }
                                              },
                                              "id": 238,
                                              "nodeType": "IfStatement",
                                              "src": "2704:173:0",
                                              "trueBody": {
                                                  "id": 237,
                                                  "nodeType": "Block",
                                                  "src": "2739:138:0",
                                                  "statements": [
                                                      {
                                                          "expression": {
                                                              "id": 228,
                                                              "isConstant": false,
                                                              "isLValue": false,
                                                              "isPure": false,
                                                              "lValueRequested": false,
                                                              "leftHandSide": {
                                                                  "id": 223,
                                                                  "name": "totalSalary",
                                                                  "nodeType": "Identifier",
                                                                  "overloadedDeclarations": [],
                                                                  "referencedDeclaration": 67,
                                                                  "src": "2758:11:0",
                                                                  "typeDescriptions": {
                                                                      "typeIdentifier": "t_uint256",
                                                                      "typeString": "uint256"
                                                                  }
                                                              },
                                                              "nodeType": "Assignment",
                                                              "operator": "-=",
                                                              "rightHandSide": {
                                                                  "expression": {
                                                                      "baseExpression": {
                                                                          "id": 224,
                                                                          "name": "employees",
                                                                          "nodeType": "Identifier",
                                                                          "overloadedDeclarations": [],
                                                                          "referencedDeclaration": 97,
                                                                          "src": "2774:9:0",
                                                                          "typeDescriptions": {
                                                                              "typeIdentifier": "t_array$_t_struct$_EmployeeStruct_$93_storage_$dyn_storage",
                                                                              "typeString": "struct Payroll.EmployeeStruct storage ref[] storage ref"
                                                                          }
                                                                      },
                                                                      "id": 226,
                                                                      "indexExpression": {
                                                                          "id": 225,
                                                                          "name": "i",
                                                                          "nodeType": "Identifier",
                                                                          "overloadedDeclarations": [],
                                                                          "referencedDeclaration": 207,
                                                                          "src": "2784:1:0",
                                                                          "typeDescriptions": {
                                                                              "typeIdentifier": "t_uint256",
                                                                              "typeString": "uint256"
                                                                          }
                                                                      },
                                                                      "isConstant": false,
                                                                      "isLValue": true,
                                                                      "isPure": false,
                                                                      "lValueRequested": false,
                                                                      "nodeType": "IndexAccess",
                                                                      "src": "2774:12:0",
                                                                      "typeDescriptions": {
                                                                          "typeIdentifier": "t_struct$_EmployeeStruct_$93_storage",
                                                                          "typeString": "struct Payroll.EmployeeStruct storage ref"
                                                                      }
                                                                  },
                                                                  "id": 227,
                                                                  "isConstant": false,
                                                                  "isLValue": true,
                                                                  "isPure": false,
                                                                  "lValueRequested": false,
                                                                  "memberLocation": "2787:6:0",
                                                                  "memberName": "salary",
                                                                  "nodeType": "MemberAccess",
                                                                  "referencedDeclaration": 90,
                                                                  "src": "2774:19:0",
                                                                  "typeDescriptions": {
                                                                      "typeIdentifier": "t_uint256",
                                                                      "typeString": "uint256"
                                                                  }
                                                              },
                                                              "src": "2758:35:0",
                                                              "typeDescriptions": {
                                                                  "typeIdentifier": "t_uint256",
                                                                  "typeString": "uint256"
                                                              }
                                                          },
                                                          "id": 229,
                                                          "nodeType": "ExpressionStatement",
                                                          "src": "2758:35:0"
                                                      },
                                                      {
                                                          "expression": {
                                                              "id": 233,
                                                              "isConstant": false,
                                                              "isLValue": false,
                                                              "isPure": false,
                                                              "lValueRequested": false,
                                                              "nodeType": "UnaryOperation",
                                                              "operator": "delete",
                                                              "prefix": true,
                                                              "src": "2812:19:0",
                                                              "subExpression": {
                                                                  "baseExpression": {
                                                                      "id": 230,
                                                                      "name": "employees",
                                                                      "nodeType": "Identifier",
                                                                      "overloadedDeclarations": [],
                                                                      "referencedDeclaration": 97,
                                                                      "src": "2819:9:0",
                                                                      "typeDescriptions": {
                                                                          "typeIdentifier": "t_array$_t_struct$_EmployeeStruct_$93_storage_$dyn_storage",
                                                                          "typeString": "struct Payroll.EmployeeStruct storage ref[] storage ref"
                                                                      }
                                                                  },
                                                                  "id": 232,
                                                                  "indexExpression": {
                                                                      "id": 231,
                                                                      "name": "i",
                                                                      "nodeType": "Identifier",
                                                                      "overloadedDeclarations": [],
                                                                      "referencedDeclaration": 207,
                                                                      "src": "2829:1:0",
                                                                      "typeDescriptions": {
                                                                          "typeIdentifier": "t_uint256",
                                                                          "typeString": "uint256"
                                                                      }
                                                                  },
                                                                  "isConstant": false,
                                                                  "isLValue": true,
                                                                  "isPure": false,
                                                                  "lValueRequested": true,
                                                                  "nodeType": "IndexAccess",
                                                                  "src": "2819:12:0",
                                                                  "typeDescriptions": {
                                                                      "typeIdentifier": "t_struct$_EmployeeStruct_$93_storage",
                                                                      "typeString": "struct Payroll.EmployeeStruct storage ref"
                                                                  }
                                                              },
                                                              "typeDescriptions": {
                                                                  "typeIdentifier": "t_tuple$__$",
                                                                  "typeString": "tuple()"
                                                              }
                                                          },
                                                          "id": 234,
                                                          "nodeType": "ExpressionStatement",
                                                          "src": "2812:19:0"
                                                      },
                                                      {
                                                          "expression": {
                                                              "hexValue": "74727565",
                                                              "id": 235,
                                                              "isConstant": false,
                                                              "isLValue": false,
                                                              "isPure": true,
                                                              "kind": "bool",
                                                              "lValueRequested": false,
                                                              "nodeType": "Literal",
                                                              "src": "2857:4:0",
                                                              "typeDescriptions": {
                                                                  "typeIdentifier": "t_bool",
                                                                  "typeString": "bool"
                                                              },
                                                              "value": "true"
                                                          },
                                                          "functionReturnParameters": 205,
                                                          "id": 236,
                                                          "nodeType": "Return",
                                                          "src": "2850:11:0"
                                                      }
                                                  ]
                                              }
                                          }
                                      ]
                                  },
                                  "condition": {
                                      "commonType": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                      },
                                      "id": 213,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "leftExpression": {
                                          "id": 210,
                                          "name": "i",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 207,
                                          "src": "2662:1:0",
                                          "typeDescriptions": {
                                              "typeIdentifier": "t_uint256",
                                              "typeString": "uint256"
                                          }
                                      },
                                      "nodeType": "BinaryOperation",
                                      "operator": "<",
                                      "rightExpression": {
                                          "expression": {
                                              "id": 211,
                                              "name": "employees",
                                              "nodeType": "Identifier",
                                              "overloadedDeclarations": [],
                                              "referencedDeclaration": 97,
                                              "src": "2666:9:0",
                                              "typeDescriptions": {
                                                  "typeIdentifier": "t_array$_t_struct$_EmployeeStruct_$93_storage_$dyn_storage",
                                                  "typeString": "struct Payroll.EmployeeStruct storage ref[] storage ref"
                                              }
                                          },
                                          "id": 212,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "memberLocation": "2676:6:0",
                                          "memberName": "length",
                                          "nodeType": "MemberAccess",
                                          "src": "2666:16:0",
                                          "typeDescriptions": {
                                              "typeIdentifier": "t_uint256",
                                              "typeString": "uint256"
                                          }
                                      },
                                      "src": "2662:20:0",
                                      "typeDescriptions": {
                                          "typeIdentifier": "t_bool",
                                          "typeString": "bool"
                                      }
                                  },
                                  "id": 240,
                                  "initializationExpression": {
                                      "assignments": [
                                          207
                                      ],
                                      "declarations": [
                                          {
                                              "constant": false,
                                              "id": 207,
                                              "mutability": "mutable",
                                              "name": "i",
                                              "nameLocation": "2655:1:0",
                                              "nodeType": "VariableDeclaration",
                                              "scope": 240,
                                              "src": "2650:6:0",
                                              "stateVariable": false,
                                              "storageLocation": "default",
                                              "typeDescriptions": {
                                                  "typeIdentifier": "t_uint256",
                                                  "typeString": "uint256"
                                              },
                                              "typeName": {
                                                  "id": 206,
                                                  "name": "uint",
                                                  "nodeType": "ElementaryTypeName",
                                                  "src": "2650:4:0",
                                                  "typeDescriptions": {
                                                      "typeIdentifier": "t_uint256",
                                                      "typeString": "uint256"
                                                  }
                                              },
                                              "visibility": "internal"
                                          }
                                      ],
                                      "id": 209,
                                      "initialValue": {
                                          "hexValue": "30",
                                          "id": 208,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": true,
                                          "kind": "number",
                                          "lValueRequested": false,
                                          "nodeType": "Literal",
                                          "src": "2659:1:0",
                                          "typeDescriptions": {
                                              "typeIdentifier": "t_rational_0_by_1",
                                              "typeString": "int_const 0"
                                          },
                                          "value": "0"
                                      },
                                      "nodeType": "VariableDeclarationStatement",
                                      "src": "2650:10:0"
                                  },
                                  "loopExpression": {
                                      "expression": {
                                          "id": 215,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "nodeType": "UnaryOperation",
                                          "operator": "++",
                                          "prefix": false,
                                          "src": "2684:3:0",
                                          "subExpression": {
                                              "id": 214,
                                              "name": "i",
                                              "nodeType": "Identifier",
                                              "overloadedDeclarations": [],
                                              "referencedDeclaration": 207,
                                              "src": "2684:1:0",
                                              "typeDescriptions": {
                                                  "typeIdentifier": "t_uint256",
                                                  "typeString": "uint256"
                                              }
                                          },
                                          "typeDescriptions": {
                                              "typeIdentifier": "t_uint256",
                                              "typeString": "uint256"
                                          }
                                      },
                                      "id": 216,
                                      "nodeType": "ExpressionStatement",
                                      "src": "2684:3:0"
                                  },
                                  "nodeType": "ForStatement",
                                  "src": "2645:243:0"
                              },
                              {
                                  "expression": {
                                      "hexValue": "66616c7365",
                                      "id": 241,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "kind": "bool",
                                      "lValueRequested": false,
                                      "nodeType": "Literal",
                                      "src": "2905:5:0",
                                      "typeDescriptions": {
                                          "typeIdentifier": "t_bool",
                                          "typeString": "bool"
                                      },
                                      "value": "false"
                                  },
                                  "functionReturnParameters": 205,
                                  "id": 242,
                                  "nodeType": "Return",
                                  "src": "2898:12:0"
                              }
                          ]
                      },
                      "functionSelector": "21ed0f64",
                      "id": 244,
                      "implemented": true,
                      "kind": "function",
                      "modifiers": [
                          {
                              "id": 202,
                              "kind": "modifierInvocation",
                              "modifierName": {
                                  "id": 201,
                                  "name": "ownerOnly",
                                  "nameLocations": [
                                      "2611:9:0"
                                  ],
                                  "nodeType": "IdentifierPath",
                                  "referencedDeclaration": 109,
                                  "src": "2611:9:0"
                              },
                              "nodeType": "ModifierInvocation",
                              "src": "2611:9:0"
                          }
                      ],
                      "name": "removeEmployee",
                      "nameLocation": "2572:14:0",
                      "nodeType": "FunctionDefinition",
                      "parameters": {
                          "id": 200,
                          "nodeType": "ParameterList",
                          "parameters": [
                              {
                                  "constant": false,
                                  "id": 199,
                                  "mutability": "mutable",
                                  "name": "employeeId",
                                  "nameLocation": "2592:10:0",
                                  "nodeType": "VariableDeclaration",
                                  "scope": 244,
                                  "src": "2587:15:0",
                                  "stateVariable": false,
                                  "storageLocation": "default",
                                  "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                  },
                                  "typeName": {
                                      "id": 198,
                                      "name": "uint",
                                      "nodeType": "ElementaryTypeName",
                                      "src": "2587:4:0",
                                      "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                      }
                                  },
                                  "visibility": "internal"
                              }
                          ],
                          "src": "2586:17:0"
                      },
                      "returnParameters": {
                          "id": 205,
                          "nodeType": "ParameterList",
                          "parameters": [
                              {
                                  "constant": false,
                                  "id": 204,
                                  "mutability": "mutable",
                                  "name": "",
                                  "nameLocation": "-1:-1:-1",
                                  "nodeType": "VariableDeclaration",
                                  "scope": 244,
                                  "src": "2629:4:0",
                                  "stateVariable": false,
                                  "storageLocation": "default",
                                  "typeDescriptions": {
                                      "typeIdentifier": "t_bool",
                                      "typeString": "bool"
                                  },
                                  "typeName": {
                                      "id": 203,
                                      "name": "bool",
                                      "nodeType": "ElementaryTypeName",
                                      "src": "2629:4:0",
                                      "typeDescriptions": {
                                          "typeIdentifier": "t_bool",
                                          "typeString": "bool"
                                      }
                                  },
                                  "visibility": "internal"
                              }
                          ],
                          "src": "2628:6:0"
                      },
                      "scope": 298,
                      "src": "2563:355:0",
                      "stateMutability": "nonpayable",
                      "virtual": false,
                      "visibility": "public"
                  },
                  {
                      "body": {
                          "id": 253,
                          "nodeType": "Block",
                          "src": "2998:35:0",
                          "statements": [
                              {
                                  "expression": {
                                      "id": 251,
                                      "name": "employees",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 97,
                                      "src": "3016:9:0",
                                      "typeDescriptions": {
                                          "typeIdentifier": "t_array$_t_struct$_EmployeeStruct_$93_storage_$dyn_storage",
                                          "typeString": "struct Payroll.EmployeeStruct storage ref[] storage ref"
                                      }
                                  },
                                  "functionReturnParameters": 250,
                                  "id": 252,
                                  "nodeType": "Return",
                                  "src": "3009:16:0"
                              }
                          ]
                      },
                      "functionSelector": "4abefa36",
                      "id": 254,
                      "implemented": true,
                      "kind": "function",
                      "modifiers": [],
                      "name": "getEmployees",
                      "nameLocation": "2935:12:0",
                      "nodeType": "FunctionDefinition",
                      "parameters": {
                          "id": 245,
                          "nodeType": "ParameterList",
                          "parameters": [],
                          "src": "2947:2:0"
                      },
                      "returnParameters": {
                          "id": 250,
                          "nodeType": "ParameterList",
                          "parameters": [
                              {
                                  "constant": false,
                                  "id": 249,
                                  "mutability": "mutable",
                                  "name": "",
                                  "nameLocation": "-1:-1:-1",
                                  "nodeType": "VariableDeclaration",
                                  "scope": 254,
                                  "src": "2973:23:0",
                                  "stateVariable": false,
                                  "storageLocation": "memory",
                                  "typeDescriptions": {
                                      "typeIdentifier": "t_array$_t_struct$_EmployeeStruct_$93_memory_ptr_$dyn_memory_ptr",
                                      "typeString": "struct Payroll.EmployeeStruct[]"
                                  },
                                  "typeName": {
                                      "baseType": {
                                          "id": 247,
                                          "nodeType": "UserDefinedTypeName",
                                          "pathNode": {
                                              "id": 246,
                                              "name": "EmployeeStruct",
                                              "nameLocations": [
                                                  "2973:14:0"
                                              ],
                                              "nodeType": "IdentifierPath",
                                              "referencedDeclaration": 93,
                                              "src": "2973:14:0"
                                          },
                                          "referencedDeclaration": 93,
                                          "src": "2973:14:0",
                                          "typeDescriptions": {
                                              "typeIdentifier": "t_struct$_EmployeeStruct_$93_storage_ptr",
                                              "typeString": "struct Payroll.EmployeeStruct"
                                          }
                                      },
                                      "id": 248,
                                      "nodeType": "ArrayTypeName",
                                      "src": "2973:16:0",
                                      "typeDescriptions": {
                                          "typeIdentifier": "t_array$_t_struct$_EmployeeStruct_$93_storage_$dyn_storage_ptr",
                                          "typeString": "struct Payroll.EmployeeStruct[]"
                                      }
                                  },
                                  "visibility": "internal"
                              }
                          ],
                          "src": "2972:25:0"
                      },
                      "scope": 298,
                      "src": "2926:107:0",
                      "stateMutability": "view",
                      "virtual": false,
                      "visibility": "external"
                  },
                  {
                      "body": {
                          "id": 272,
                          "nodeType": "Block",
                          "src": "3108:74:0",
                          "statements": [
                              {
                                  "expression": {
                                      "arguments": [
                                          {
                                              "id": 266,
                                              "name": "to",
                                              "nodeType": "Identifier",
                                              "overloadedDeclarations": [],
                                              "referencedDeclaration": 256,
                                              "src": "3141:2:0",
                                              "typeDescriptions": {
                                                  "typeIdentifier": "t_address",
                                                  "typeString": "address"
                                              }
                                          },
                                          {
                                              "id": 267,
                                              "name": "amount",
                                              "nodeType": "Identifier",
                                              "overloadedDeclarations": [],
                                              "referencedDeclaration": 258,
                                              "src": "3145:6:0",
                                              "typeDescriptions": {
                                                  "typeIdentifier": "t_uint256",
                                                  "typeString": "uint256"
                                              }
                                          }
                                      ],
                                      "expression": {
                                          "argumentTypes": [
                                              {
                                                  "typeIdentifier": "t_address",
                                                  "typeString": "address"
                                              },
                                              {
                                                  "typeIdentifier": "t_uint256",
                                                  "typeString": "uint256"
                                              }
                                          ],
                                          "expression": {
                                              "id": 263,
                                              "name": "paymentToken",
                                              "nodeType": "Identifier",
                                              "overloadedDeclarations": [],
                                              "referencedDeclaration": 59,
                                              "src": "3119:12:0",
                                              "typeDescriptions": {
                                                  "typeIdentifier": "t_contract$_PayrollToken_$56",
                                                  "typeString": "contract PayrollToken"
                                              }
                                          },
                                          "id": 265,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "memberLocation": "3132:8:0",
                                          "memberName": "transfer",
                                          "nodeType": "MemberAccess",
                                          "referencedDeclaration": 815,
                                          "src": "3119:21:0",
                                          "typeDescriptions": {
                                              "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                                              "typeString": "function (address,uint256) external returns (bool)"
                                          }
                                      },
                                      "id": 268,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "kind": "functionCall",
                                      "lValueRequested": false,
                                      "nameLocations": [],
                                      "names": [],
                                      "nodeType": "FunctionCall",
                                      "src": "3119:33:0",
                                      "tryCall": false,
                                      "typeDescriptions": {
                                          "typeIdentifier": "t_bool",
                                          "typeString": "bool"
                                      }
                                  },
                                  "id": 269,
                                  "nodeType": "ExpressionStatement",
                                  "src": "3119:33:0"
                              },
                              {
                                  "expression": {
                                      "hexValue": "74727565",
                                      "id": 270,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "kind": "bool",
                                      "lValueRequested": false,
                                      "nodeType": "Literal",
                                      "src": "3170:4:0",
                                      "typeDescriptions": {
                                          "typeIdentifier": "t_bool",
                                          "typeString": "bool"
                                      },
                                      "value": "true"
                                  },
                                  "functionReturnParameters": 262,
                                  "id": 271,
                                  "nodeType": "Return",
                                  "src": "3163:11:0"
                              }
                          ]
                      },
                      "id": 273,
                      "implemented": true,
                      "kind": "function",
                      "modifiers": [],
                      "name": "payTo",
                      "nameLocation": "3050:5:0",
                      "nodeType": "FunctionDefinition",
                      "parameters": {
                          "id": 259,
                          "nodeType": "ParameterList",
                          "parameters": [
                              {
                                  "constant": false,
                                  "id": 256,
                                  "mutability": "mutable",
                                  "name": "to",
                                  "nameLocation": "3064:2:0",
                                  "nodeType": "VariableDeclaration",
                                  "scope": 273,
                                  "src": "3056:10:0",
                                  "stateVariable": false,
                                  "storageLocation": "default",
                                  "typeDescriptions": {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                  },
                                  "typeName": {
                                      "id": 255,
                                      "name": "address",
                                      "nodeType": "ElementaryTypeName",
                                      "src": "3056:7:0",
                                      "stateMutability": "nonpayable",
                                      "typeDescriptions": {
                                          "typeIdentifier": "t_address",
                                          "typeString": "address"
                                      }
                                  },
                                  "visibility": "internal"
                              },
                              {
                                  "constant": false,
                                  "id": 258,
                                  "mutability": "mutable",
                                  "name": "amount",
                                  "nameLocation": "3076:6:0",
                                  "nodeType": "VariableDeclaration",
                                  "scope": 273,
                                  "src": "3068:14:0",
                                  "stateVariable": false,
                                  "storageLocation": "default",
                                  "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                  },
                                  "typeName": {
                                      "id": 257,
                                      "name": "uint256",
                                      "nodeType": "ElementaryTypeName",
                                      "src": "3068:7:0",
                                      "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                      }
                                  },
                                  "visibility": "internal"
                              }
                          ],
                          "src": "3055:28:0"
                      },
                      "returnParameters": {
                          "id": 262,
                          "nodeType": "ParameterList",
                          "parameters": [
                              {
                                  "constant": false,
                                  "id": 261,
                                  "mutability": "mutable",
                                  "name": "",
                                  "nameLocation": "-1:-1:-1",
                                  "nodeType": "VariableDeclaration",
                                  "scope": 273,
                                  "src": "3102:4:0",
                                  "stateVariable": false,
                                  "storageLocation": "default",
                                  "typeDescriptions": {
                                      "typeIdentifier": "t_bool",
                                      "typeString": "bool"
                                  },
                                  "typeName": {
                                      "id": 260,
                                      "name": "bool",
                                      "nodeType": "ElementaryTypeName",
                                      "src": "3102:4:0",
                                      "typeDescriptions": {
                                          "typeIdentifier": "t_bool",
                                          "typeString": "bool"
                                      }
                                  },
                                  "visibility": "internal"
                              }
                          ],
                          "src": "3101:6:0"
                      },
                      "scope": 298,
                      "src": "3041:141:0",
                      "stateMutability": "nonpayable",
                      "virtual": false,
                      "visibility": "internal"
                  },
                  {
                      "body": {
                          "id": 288,
                          "nodeType": "Block",
                          "src": "3250:63:0",
                          "statements": [
                              {
                                  "expression": {
                                      "arguments": [
                                          {
                                              "arguments": [
                                                  {
                                                      "id": 284,
                                                      "name": "this",
                                                      "nodeType": "Identifier",
                                                      "overloadedDeclarations": [],
                                                      "referencedDeclaration": 4294967268,
                                                      "src": "3299:4:0",
                                                      "typeDescriptions": {
                                                          "typeIdentifier": "t_contract$_Payroll_$298",
                                                          "typeString": "contract Payroll"
                                                      }
                                                  }
                                              ],
                                              "expression": {
                                                  "argumentTypes": [
                                                      {
                                                          "typeIdentifier": "t_contract$_Payroll_$298",
                                                          "typeString": "contract Payroll"
                                                      }
                                                  ],
                                                  "id": 283,
                                                  "isConstant": false,
                                                  "isLValue": false,
                                                  "isPure": true,
                                                  "lValueRequested": false,
                                                  "nodeType": "ElementaryTypeNameExpression",
                                                  "src": "3291:7:0",
                                                  "typeDescriptions": {
                                                      "typeIdentifier": "t_type$_t_address_$",
                                                      "typeString": "type(address)"
                                                  },
                                                  "typeName": {
                                                      "id": 282,
                                                      "name": "address",
                                                      "nodeType": "ElementaryTypeName",
                                                      "src": "3291:7:0",
                                                      "typeDescriptions": {}
                                                  }
                                              },
                                              "id": 285,
                                              "isConstant": false,
                                              "isLValue": false,
                                              "isPure": false,
                                              "kind": "typeConversion",
                                              "lValueRequested": false,
                                              "nameLocations": [],
                                              "names": [],
                                              "nodeType": "FunctionCall",
                                              "src": "3291:13:0",
                                              "tryCall": false,
                                              "typeDescriptions": {
                                                  "typeIdentifier": "t_address",
                                                  "typeString": "address"
                                              }
                                          }
                                      ],
                                      "expression": {
                                          "argumentTypes": [
                                              {
                                                  "typeIdentifier": "t_address",
                                                  "typeString": "address"
                                              }
                                          ],
                                          "expression": {
                                              "id": 280,
                                              "name": "paymentToken",
                                              "nodeType": "Identifier",
                                              "overloadedDeclarations": [],
                                              "referencedDeclaration": 59,
                                              "src": "3268:12:0",
                                              "typeDescriptions": {
                                                  "typeIdentifier": "t_contract$_PayrollToken_$56",
                                                  "typeString": "contract PayrollToken"
                                              }
                                          },
                                          "id": 281,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "memberLocation": "3281:9:0",
                                          "memberName": "balanceOf",
                                          "nodeType": "MemberAccess",
                                          "referencedDeclaration": 790,
                                          "src": "3268:22:0",
                                          "typeDescriptions": {
                                              "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_uint256_$",
                                              "typeString": "function (address) view external returns (uint256)"
                                          }
                                      },
                                      "id": 286,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "kind": "functionCall",
                                      "lValueRequested": false,
                                      "nameLocations": [],
                                      "names": [],
                                      "nodeType": "FunctionCall",
                                      "src": "3268:37:0",
                                      "tryCall": false,
                                      "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                      }
                                  },
                                  "functionReturnParameters": 279,
                                  "id": 287,
                                  "nodeType": "Return",
                                  "src": "3261:44:0"
                              }
                          ]
                      },
                      "functionSelector": "9e1a4d19",
                      "id": 289,
                      "implemented": true,
                      "kind": "function",
                      "modifiers": [
                          {
                              "id": 276,
                              "kind": "modifierInvocation",
                              "modifierName": {
                                  "id": 275,
                                  "name": "ownerOnly",
                                  "nameLocations": [
                                      "3226:9:0"
                                  ],
                                  "nodeType": "IdentifierPath",
                                  "referencedDeclaration": 109,
                                  "src": "3226:9:0"
                              },
                              "nodeType": "ModifierInvocation",
                              "src": "3226:9:0"
                          }
                      ],
                      "name": "tokenBalance",
                      "nameLocation": "3199:12:0",
                      "nodeType": "FunctionDefinition",
                      "parameters": {
                          "id": 274,
                          "nodeType": "ParameterList",
                          "parameters": [],
                          "src": "3211:2:0"
                      },
                      "returnParameters": {
                          "id": 279,
                          "nodeType": "ParameterList",
                          "parameters": [
                              {
                                  "constant": false,
                                  "id": 278,
                                  "mutability": "mutable",
                                  "name": "",
                                  "nameLocation": "-1:-1:-1",
                                  "nodeType": "VariableDeclaration",
                                  "scope": 289,
                                  "src": "3245:4:0",
                                  "stateVariable": false,
                                  "storageLocation": "default",
                                  "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                  },
                                  "typeName": {
                                      "id": 277,
                                      "name": "uint",
                                      "nodeType": "ElementaryTypeName",
                                      "src": "3245:4:0",
                                      "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                      }
                                  },
                                  "visibility": "internal"
                              }
                          ],
                          "src": "3244:6:0"
                      },
                      "scope": 298,
                      "src": "3190:123:0",
                      "stateMutability": "view",
                      "virtual": false,
                      "visibility": "public"
                  },
                  {
                      "body": {
                          "id": 292,
                          "nodeType": "Block",
                          "src": "3340:2:0",
                          "statements": []
                      },
                      "id": 293,
                      "implemented": true,
                      "kind": "fallback",
                      "modifiers": [],
                      "name": "",
                      "nameLocation": "-1:-1:-1",
                      "nodeType": "FunctionDefinition",
                      "parameters": {
                          "id": 290,
                          "nodeType": "ParameterList",
                          "parameters": [],
                          "src": "3329:2:0"
                      },
                      "returnParameters": {
                          "id": 291,
                          "nodeType": "ParameterList",
                          "parameters": [],
                          "src": "3340:0:0"
                      },
                      "scope": 298,
                      "src": "3321:21:0",
                      "stateMutability": "nonpayable",
                      "virtual": false,
                      "visibility": "external"
                  },
                  {
                      "body": {
                          "id": 296,
                          "nodeType": "Block",
                          "src": "3376:2:0",
                          "statements": []
                      },
                      "id": 297,
                      "implemented": true,
                      "kind": "receive",
                      "modifiers": [],
                      "name": "",
                      "nameLocation": "-1:-1:-1",
                      "nodeType": "FunctionDefinition",
                      "parameters": {
                          "id": 294,
                          "nodeType": "ParameterList",
                          "parameters": [],
                          "src": "3357:2:0"
                      },
                      "returnParameters": {
                          "id": 295,
                          "nodeType": "ParameterList",
                          "parameters": [],
                          "src": "3376:0:0"
                      },
                      "scope": 298,
                      "src": "3350:28:0",
                      "stateMutability": "payable",
                      "virtual": false,
                      "visibility": "external"
                  }
              ],
              "scope": 299,
              "src": "1055:2331:0",
              "usedErrors": []
          }
      ],
      "src": "32:3356:0"
  },
  "functionHashes": {
      "DEFAULT_ADMIN_ROLE()": "a217fddf",
      "MINTER_ROLE()": "d5391393",
      "allowance(address,address)": "dd62ed3e",
      "approve(address,uint256)": "095ea7b3",
      "balanceOf(address)": "70a08231",
      "burn(uint256)": "42966c68",
      "burnFrom(address,uint256)": "79cc6790",
      "decimals()": "313ce567",
      "decreaseAllowance(address,uint256)": "a457c2d7",
      "getRoleAdmin(bytes32)": "248a9ca3",
      "grantRole(bytes32,address)": "2f2ff15d",
      "hasRole(bytes32,address)": "91d14854",
      "increaseAllowance(address,uint256)": "39509351",
      "mint(address,uint256)": "40c10f19",
      "name()": "06fdde03",
      "renounceRole(bytes32,address)": "36568abe",
      "revokeRole(bytes32,address)": "d547741f",
      "supportsInterface(bytes4)": "01ffc9a7",
      "symbol()": "95d89b41",
      "totalSupply()": "18160ddd",
      "transfer(address,uint256)": "a9059cbb",
      "transferFrom(address,address,uint256)": "23b872dd"
  },
  "gasEstimates": {
      "creation": {
          "codeDepositCost": "922600",
          "executionCost": "infinite",
          "totalCost": "infinite"
      },
      "external": {
          "DEFAULT_ADMIN_ROLE()": "217",
          "MINTER_ROLE()": "283",
          "allowance(address,address)": "infinite",
          "approve(address,uint256)": "24658",
          "balanceOf(address)": "2585",
          "burn(uint256)": "50880",
          "burnFrom(address,uint256)": "77634",
          "decimals()": "244",
          "decreaseAllowance(address,uint256)": "26983",
          "getRoleAdmin(bytes32)": "2467",
          "grantRole(bytes32,address)": "infinite",
          "hasRole(bytes32,address)": "2743",
          "increaseAllowance(address,uint256)": "27083",
          "mint(address,uint256)": "infinite",
          "name()": "infinite",
          "renounceRole(bytes32,address)": "29090",
          "revokeRole(bytes32,address)": "infinite",
          "supportsInterface(bytes4)": "450",
          "symbol()": "infinite",
          "totalSupply()": "2371",
          "transfer(address,uint256)": "51242",
          "transferFrom(address,address,uint256)": "infinite"
      }
  }
}
