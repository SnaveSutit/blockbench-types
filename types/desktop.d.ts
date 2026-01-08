declare global {
	function initializeDesktopApp(): void
	function loadOpenWithBlockbenchFile(): void
	function updateRecentProjects(): void
	function addRecentProject(data: any): void
	function updateRecentProjectData(): void
	function updateRecentProjectThumbnail(): Promise<void>
	function loadDataFromModelMemory(): void
	function updateWindowState(e: any, type: any): void
	function changeImageEditor(texture: any, from_settings: any): void
	function selectImageEditorFile(texture: any): void
	function openDefaultTexturePath(): void
	function findExistingFile(paths: string[]): any
	function createBackup(init: any): void
	function closeBlockbenchWindow(): any

	function updateRecentProjects(): void
	function addRecentProject(data: any): void
	function updateRecentProjectData(): void
	function updateRecentProjectThumbnail(): Promise<void>
	function loadDataFromModelMemory(): void
	function changeImageEditor(texture: any, from_settings: any): void
	function openDefaultTexturePath(): void

	function createBackup(init: any): void
	function closeBlockbenchWindow(): any

	type ScopedFS = Pick<
		typeof import('node:fs'),
		| 'copyFile'
		| 'copyFileSync'
		| 'readFile'
		| 'readFileSync'
		| 'writeFile'
		| 'writeFileSync'
		| 'appendFile'
		| 'appendFileSync'
		| 'existsSync'
		| 'mkdir'
		| 'mkdirSync'
		| 'readdir'
		| 'readdirSync'
		| 'rename'
		| 'renameSync'
		| 'rm'
		| 'rmSync'
		| 'rmdir'
		| 'rmdirSync'
		| 'unlink'
		| 'unlinkSync'
		| 'stat'
		| 'statSync'
	> & {
		promises: Pick<
			typeof import('node:fs').promises,
			| 'copyFile'
			| 'readFile'
			| 'writeFile'
			| 'appendFile'
			| 'mkdir'
			| 'readdir'
			| 'rename'
			| 'rm'
			| 'rmdir'
			| 'unlink'
			| 'stat'
		>
	}
	interface RequireDialogOptions {
		message?: string
		optional?: boolean
	}

	function requireNativeModule(
		module: 'fs',
		options?: { scope?: string } & RequireDialogOptions
	): ScopedFS | undefined
	function requireNativeModule(module: 'path'): typeof import('node:path')
	function requireNativeModule(module: 'crypto'): typeof import('node:crypto')
	function requireNativeModule(module: 'events'): typeof import('node:events')
	function requireNativeModule(module: 'zlib'): typeof import('node:zlib')
	function requireNativeModule(module: 'timers'): typeof import('node:timers')
	function requireNativeModule(module: 'url'): typeof import('node:url')
	function requireNativeModule(module: 'string_decoder'): typeof import('node:string_decoder')
	function requireNativeModule(module: 'querystring'): typeof import('node:querystring')
	function requireNativeModule(
		module: 'child_process',
		options?: RequireDialogOptions
	): typeof import('node:child_process') | undefined
	function requireNativeModule(
		module: 'electron',
		options?: RequireDialogOptions
	): typeof import('electron') | undefined
	function requireNativeModule(
		module: 'https',
		options?: RequireDialogOptions
	): typeof import('node:https') | undefined
	function requireNativeModule(
		module: 'net',
		options?: RequireDialogOptions
	): typeof import('node:net') | undefined
	function requireNativeModule(
		module: 'tls',
		options?: RequireDialogOptions
	): typeof import('node:tls') | undefined
	function requireNativeModule(
		module: 'util',
		options?: RequireDialogOptions
	): typeof import('node:util') | undefined
	function requireNativeModule(
		module: 'os',
		options?: RequireDialogOptions
	): typeof import('node:os') | undefined
	function requireNativeModule(
		module: 'v8',
		options?: RequireDialogOptions
	): typeof import('node:v8') | undefined
}

export {}
